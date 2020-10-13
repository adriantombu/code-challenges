// Package isogram does stuff
package isogram

import (
	"strings"
)

// IsIsogram checks if a string has no duplicate letters
func IsIsogram(input string) bool {
	values := map[rune]bool{}
	input = strings.ToLower(input)

	for _, letter := range input {
		if letter == '-' || letter == ' ' {
			continue
		}

		if values[letter] {
			return false
		}

		values[letter] = true
	}

	return true
}
