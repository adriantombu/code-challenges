// Package hamming compares two DNA strands.
package hamming

import "errors"

// Distance calculates the Hamming distance between two DNA strands
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return 0, errors.New("strings don't have matching sizes")
	}

	dist := 0
	aRune := []rune(a)
	bRune := []rune(b)

	for i := range aRune {
		if aRune[i] != bRune[i] {
			dist++
		}
	}

	return dist, nil
}
