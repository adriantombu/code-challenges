// Package reverse reverses an input
package reverse

// Reverse reverses a string
func Reverse(input string) string {
	var res []rune

	for _, letter := range input {
		res = append([]rune{letter}, res...)
	}

	return string(res)
}
