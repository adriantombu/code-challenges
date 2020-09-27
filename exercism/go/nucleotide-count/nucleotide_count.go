// Package dna makes operations on dna strands
package dna

import "errors"

// Histogram is a mapping from nucleotide to its count in given DNA.
type Histogram map[rune]int

// DNA is a list of nucleotides.
type DNA []rune

// Counts generates a histogram of valid nucleotides in the given DNA.
// Returns an error if d contains an invalid nucleotide.
func (d DNA) Counts() (Histogram, error) {
	h := Histogram{'A': 0, 'C': 0, 'G': 0, 'T': 0}

	for _, key := range d {
		if _, ok := h[key]; !ok {
			return Histogram{}, errors.New("the strand contains invalid nucleotides")
		}

		h[key]++
	}

	return h, nil
}
