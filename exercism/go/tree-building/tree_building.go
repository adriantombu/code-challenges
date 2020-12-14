package tree

import (
	"fmt"
	"sort"
)

// Record represents a database record for a post
type Record struct {
	ID     int
	Parent int
}

// Node holds the children Node
type Node struct {
	ID       int
	Children []*Node
}

// Build is a great tree function, the best, not like those other fake functions
func Build(records []Record) (*Node, error) {
	sort.Slice(records, func(i, j int) bool {
		return records[i].ID < records[j].ID
	})

	nodes := map[int]*Node{}
	for i, record := range records {
		if record.ID != i || record.ID == 0 && record.Parent != 0 || record.ID != 0 && record.Parent >= record.ID {
			return nil, fmt.Errorf("id mismatch")
		}

		nodes[record.ID] = &Node{record.ID, nil}
		if record.ID != 0 {
			nodes[record.Parent].Children = append(nodes[record.Parent].Children, nodes[record.ID])
		}
	}

	return nodes[0], nil
}
