// Package romannumerals processes roman and arabic numerals
package romannumerals

import "errors"

// ToRomanNumeral converts arabic numeral to its Roman counterpart
func ToRomanNumeral(nb int) (string, error) {
	if nb <= 0 || nb > 3000 {
		return "", errors.New("year must be between 1 and 3000")
	}

	numbers := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	letters := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	var res string

	for key, val := range numbers {
		for nb >= val {
			res += letters[key]
			nb -= val
		}
	}

	return res, nil
}
