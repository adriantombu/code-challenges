// Package darts calculates the score of a throw
package darts

import "math"

// Score returns the score of a dart throw depending of its position in the board
// As I suck at math, I had to learn how to calculate the distance between two points
// See https://www.whitman.edu/mathematics/calculus_online/section01.02.html for more informations
func Score(x float64, y float64) int {
	distance := math.Hypot(x,y)

	switch {
		case distance <= 1:
			return 10
		case distance <= 5:
			return 5
		case distance <= 10:
			return 1
		default:
			return 0
	}
}
