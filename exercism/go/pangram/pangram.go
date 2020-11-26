// Package pangram offers functions to play with... pangram !
// A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least
// once. The best known English pangram is: The quick brown fox jumps over the lazy dog.
package pangram

import (
	"strings"
	"unicode"
)

// IsPangram checks if the provided input is a pangram
func IsPangram(input string) bool {
	input = strings.ToLower(input)
	res := make(map[rune]bool)

	for _, l := range input {
		if unicode.IsLetter(l) && !res[l] {
			res[l] = true
		}
	}

	return len(res) == 26
}
