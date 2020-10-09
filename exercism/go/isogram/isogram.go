// Package isogram does stuff
package isogram

import (
	"strings"
)

// IsIsogram checks if a string has no duplicate letters
func IsIsogram(input string) bool {
	values := map[rune]int{}
	input = strings.ToLower(input)

	for _, letter := range input {
		if letter == '-' || letter == ' ' {
			continue
		}

		if _, ok := values[letter]; ok {
			return false
		}

		values[letter] = 1
	}

	return true
}
