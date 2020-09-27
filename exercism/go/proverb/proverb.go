// Package proverb is a very wise package
package proverb

import "fmt"

// Proverb generates some proverb only found in coding games
func Proverb(rhyme []string) []string {
	if len(rhyme) == 0 {
		return rhyme
	}

	var res []string

	for i := 0; i < len(rhyme)-1; i++ {
		res = append(res, fmt.Sprintf("For want of a %s the %s was lost.", rhyme[i], rhyme[i+1]))
	}

	return append(res, fmt.Sprintf("And all for the want of a %s.", rhyme[0]))
}
