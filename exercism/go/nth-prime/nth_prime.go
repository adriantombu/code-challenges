// Package prime is not related to Optimus Prime
package prime

import "math"

// primes is the list of the computed prime numbers
var primes []int

// Nth - Given a number nth, determine what the nth prime is
func Nth(nth int) (int, bool) {
	if nth < 1 {
		return 0, false
	}

	if len(primes) == 0 {
		generatePrimes()
	}

	return primes[nth-1], true
}

// See https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes for more information on this algorithm
func generatePrimes() {
	max := math.MaxInt32
	isPrime := make([]bool, max)

	for i := 2; i < max; i++ {
		isPrime[i] = true
	}

	for i := 2; i < max; i++ {
		if isPrime[i] {
			for j := i * 2; j < max; j += i {
				isPrime[j] = false
			}
		}
	}

	for i, val := range isPrime {
		if val {
			primes = append(primes, i)
		}
	}
}
