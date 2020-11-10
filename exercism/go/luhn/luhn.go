// Package luhn determine whether or not it a number valid per the Luhn formula
// More on the Luhn algorithm here https://en.wikipedia.org/wiki/Luhn_algorithm
package luhn

import (
	"errors"
	"regexp"
	"strconv"
	"strings"
)

// Valid checks if the number is valid per the Luhn Formula
func Valid(input string) bool {
	nb, err := sanitize(input)
	if err != nil {
		return false
	}

	nDigits := len(nb)
	parity := nDigits % 2
	sum, _ := strconv.Atoi(string(nb[nDigits-1]))

	for i := 0; i < nDigits-1; i++ {
		digit, _ := strconv.Atoi(string(nb[i]))

		if i%2 == parity {
			digit *= 2
		}

		if digit > 9 {
			digit -= 9
		}

		sum += digit
	}

	return sum%10 == 0
}

func sanitize(input string) (string, error) {
	input = strings.Replace(input, " ", "", -1)

	re := regexp.MustCompile("[^0-9]+")
	if re.Find([]byte(input)) != nil {
		return "", errors.New("the string must only have digits")
	}

	if len(input) < 2 {
		return "", errors.New("the string must contain at least 2 digits")
	}

	return input, nil
}
