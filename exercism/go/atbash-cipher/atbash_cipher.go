// Package atbash uses an ancient encryption system created in the Middle East
package atbash

import (
	"fmt"
	"strings"
	"unicode"
)

const unicodeA = 97
const z = 25
const length = 26

// Atbash encodes and decodes using the atbash cipher
func Atbash(input string) string {
	res := ""
	cpt := 0
	input = strings.ToLower(input)

	for _, l := range input {
		if unicode.IsLetter(l) || unicode.IsNumber(l) {
			cpt++

			new := l
			if unicode.IsLetter(l) {
				base := l - unicodeA
				new = (length+z-base)%length + unicodeA
			}

			res = fmt.Sprintf("%s%s", res, string(new))

			if cpt == 5 {
				res = fmt.Sprintf("%s%s", res, " ")
				cpt = 0
			}
		}
	}

	return strings.Trim(res, " ")
}
