package sieve

// Sieve returns an array of int representing all the primes from 2 up to the
// given max value
func Sieve(max int) []int {
	var primes []int
	isPrime := make([]bool, max+1)

	for i := 2; i <= max; i++ {
		isPrime[i] = true
	}

	for i := 2; i <= max; i++ {
		if isPrime[i] {
			primes = append(primes, i)

			for j := i * 2; j <= max; j += i {
				isPrime[j] = false
			}
		}
	}

	return primes
}
