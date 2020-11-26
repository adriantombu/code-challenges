// Package grains - There once was a wise servant who saved the life of a prince...
package grains

import (
	"fmt"
)

// Square calculates the number of grains of wheat on a chessboard given that the number on each square doubles
func Square(input int) (uint64, error) {
	if input < 1 || input > 64 {
		return 0, fmt.Errorf("input must be between 1 and 64 but \"%d\" was provided", input)
	}

	return 1 << (input - 1), nil
}

// Total calculates all the grains present on the chessboard
func Total() uint64 {
	return 1<<64 - 1
}
