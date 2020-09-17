// Convert a phrase to its acronym.
package acronym

import (
	"strings"
)

func Abbreviate(s string) string {
	r := strings.NewReplacer(
		",", "",
		"_", "",
		"'", "",
		"-", " ",
	)
	str := r.Replace(s)
	words := strings.Fields(str)
	acronym := ""

	for _, word := range words {
		acronym += strings.ToUpper(string(word[0]))
	}

	return acronym
}
