// Package triangle makes some checks on triangles
package triangle

import "math"

// Kind is the type of triangle
type Kind string

const (
	// NaT is not a triangle
	NaT Kind = "NaT"
	// Equ is equilateral
	Equ Kind = "Equ"
	// Iso is // isosceles
	Iso Kind = "Iso"
	// Sca is // scalene
	Sca Kind = "Sca"
)

func isValid(a, b, c float64) bool {
	switch {
	case math.IsInf(a, 0) || math.IsInf(b, 0) || math.IsInf(c, 0):
		return false
	case math.IsNaN(a) || math.IsNaN(b) || math.IsNaN(c):
		return false
	case a <= 0 || b <= 0 || c <= 0:
		return false
	case a+b < c || a+c < b || b+c < a:
		return false
	}

	return true
}

// KindFromSides returns the Kind of the triangle from his three sides length
func KindFromSides(a, b, c float64) Kind {
	if !isValid(a, b, c) {
		return NaT
	}

	if a == b && a == c {
		return Equ
	}

	if a != b && a != c && b != c {
		return Sca
	}

	return Iso
}
