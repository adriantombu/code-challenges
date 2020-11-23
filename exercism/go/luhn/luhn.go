// Package luhn determine whether or not it a number valid per the Luhn formula
// More on the Luhn algorithm here https://en.wikipedia.org/wiki/Luhn_algorithm
package luhn

import (
	"strconv"
	"strings"
)

// Valid checks if the number is valid per the Luhn Formula
func Valid(input string) bool {
	input = strings.ReplaceAll(input, " ", "")
	nDigits := len(input)
	if nDigits < 2 {
		return false
	}

	parity := nDigits%2 == 0
	sum := 0

	for _, r := range input {
		digit, err := strconv.Atoi(string(r))
		if err != nil {
			return false
		}

		if parity {
			digit *= 2
		}

		if digit > 9 {
			digit -= 9
		}

		sum += digit
		parity = !parity
	}

	return sum%10 == 0
}
