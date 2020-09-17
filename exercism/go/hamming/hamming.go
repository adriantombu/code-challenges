// The package hamming compares two DNA strands
package hamming

import (
	"errors"
)

// Calculate the Hamming Distance between two DNA strands
func Distance(a, b string) (int, error) {
	if len(a) != len(b) {
		return -1, errors.New("Strings don't have matching sizes")
	}

	dist := 0

	for i := range a {
		if a[i] != b[i] {
			dist++
		}
	}

	return dist, nil
}
