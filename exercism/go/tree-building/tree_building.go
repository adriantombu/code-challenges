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

// Build creates a tree of related records from a flat list of records
func Build(records []Record) (*Node, error) {
	sort.Slice(records, func(i, j int) bool {
		return records[i].ID < records[j].ID
	})

	nodes := map[int]*Node{}
	for i, r := range records {
		if r.ID != i || r.Parent > r.ID || r.ID > 0 && r.Parent == r.ID {
			return nil, fmt.Errorf("id mismatch on record %v", r)
		}

		nodes[r.ID] = &Node{r.ID, nil}
		if r.ID != 0 {
			nodes[r.Parent].Children = append(nodes[r.Parent].Children, nodes[r.ID])
		}
	}

	return nodes[0], nil
}
