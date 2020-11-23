// Package anagram offers helpers to handle anagrams
package anagram

import (
	"sort"
	"strings"
)

// Detect checks if an anagram of subject exist in a list of candidates and returns them
func Detect(subject string, candidates []string) []string {
	subject = strings.ToLower(subject)
	subjectSorted := sortString(subject)

	var res []string
	for _, c := range candidates {
		candidate := strings.ToLower(c)
		if subject == strings.ToLower(candidate) || subjectSorted != sortString(candidate) {
			continue
		}

		res = append(res, c)
	}

	return res
}

func sortString(input string) string {
	s := strings.Split(input, "")
	sort.Strings(s)
	return strings.Join(s, "")
}
