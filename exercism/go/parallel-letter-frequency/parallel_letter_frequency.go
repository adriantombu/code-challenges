package letter

// FreqMap records the frequency of each rune in a given text.
type FreqMap map[rune]int

// Frequency counts the frequency of each rune in a given text and returns this
// data as a FreqMap.
func Frequency(s string) FreqMap {
	m := FreqMap{}
	for _, r := range s {
		m[r]++
	}
	return m
}

// ConcurrentFrequency counts the frequency of letters in texts using parallel
// computation and returns data as FreqMap
func ConcurrentFrequency(texts []string) FreqMap {
	c := make(chan FreqMap, 10)

	for _, text := range texts {
		go func(text string) {
			c <- Frequency(text)
		}(text)
	}

	m := FreqMap{}
	for range texts {
		for k, v := range <-c {
			m[k] += v
		}
	}

	return m
}
