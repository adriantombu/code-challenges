package isbn

import (
	"regexp"
	"strings"
)

// IsValidISBN checks if a given input is a valid ISBN-10 number
func IsValidISBN(isbn string) bool {
	isbn = strings.ReplaceAll(isbn, "-", "")
	if len(isbn) != 10 {
		return false
	}

	reg := regexp.MustCompile("[^X0-9]+")
	if len(reg.FindAll([]byte(isbn), -1)) > 0 {
		return false
	}

	sum := 0
	for i, nb := range isbn {
		var val int
		if nb == 'X' {
			// check digit X can only be at the end
			if i != 9 {
				return false
			}

			val = 10
		} else {
			// See https://tutorials.technology/tutorials/go-convert-rune-to-int.html
			val = int(nb - '0')
		}

		sum += (10 - i) * val
	}

	return sum%11 == 0
}
