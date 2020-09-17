// The experiment1a package messes with numbers
package experiment1a

import "fmt"

// Describe provides an assortment of human-readable representation of numbers.
func Describe(number int) string {
	var result = ""

	if number%144 == 0 {
		result += fmt.Sprintf("%d gross or ", number/144)
	}

	if number%20 == 0 {
		result += fmt.Sprintf("%d score or ", number/20)
	}

	if number%12 == 0 {
		result += fmt.Sprintf("%d dozen or ", number/12)
	}

	result += fmt.Sprint(number)

	return result
}
