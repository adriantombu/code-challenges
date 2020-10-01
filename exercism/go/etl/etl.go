// Package etl performs transformation on legacy data
package etl

import "strings"

// Transform converts legacy Scrabble notation to a new shiny one (because why not?)
func Transform(legacy map[int][]string) map[string]int {
	res := make(map[string]int)

	for points, letters := range legacy {
		for _, letter := range letters {
			res[strings.ToLower(letter)] = points
		}
	}

	return res
}
