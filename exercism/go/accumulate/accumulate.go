// Package accumulate processes list of values
package accumulate

// Accumulate transforms a list of strings with a converter function and returns the processed list of strings
func Accumulate(given []string, converter func(string) string) []string {
	var res []string

	for _, value := range given {
		res = append(res, converter(value))
	}

	return res
}
