// Package raindrops transforms an int into a processed string
package raindrops

import "fmt"

// Convert a number to a string, the content of which depends on the number's factors
func Convert(number int) string {
	if number%7 != 0 && number%5 != 0 && number%3 != 0 {
		return fmt.Sprintf("%d", number)
	}

	result := ""

	if number%3 == 0 {
		result += "Pling"
	}

	if number%5 == 0 {
		result += "Plang"
	}

	if number%7 == 0 {
		result += "Plong"
	}

	return result
}
