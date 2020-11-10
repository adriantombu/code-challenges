// Package diffsquares finds the difference between the square of the sum and the sum of the square
package diffsquares

// SquareOfSum calculates the square of the first n natural numbers
func SquareOfSum(n int) int {
	return (n * (n + 1) / 2) * (n * (n + 1) / 2)
}

// SumOfSquares calculates the sum of the square of the first n natural numbers
func SumOfSquares(n int) int {
	return (n * (n + 1) * ((n * 2) + 1)) / 6
}

// Difference calculates the differences between SquareOfSum and SumOfSquares
func Difference(n int) int {
	return SquareOfSum(n) - SumOfSquares(n)
}
