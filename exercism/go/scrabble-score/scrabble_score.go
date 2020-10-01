// Package scrabble gives the score of a word
package scrabble

import "strings"

// Score - Given a word, compute the Scrabble score for that word
func Score(word string) int {
	values := getValues()

	var score int
	for _, val := range word {
		score += values[strings.ToUpper(string(val))]
	}

	return score
}

func getValues() map[string]int {
	values := make(map[string]int)
	values["A"] = 1
	values["E"] = 1
	values["I"] = 1
	values["O"] = 1
	values["U"] = 1
	values["L"] = 1
	values["N"] = 1
	values["R"] = 1
	values["S"] = 1
	values["T"] = 1
	values["D"] = 2
	values["G"] = 2
	values["B"] = 3
	values["C"] = 3
	values["M"] = 3
	values["P"] = 3
	values["F"] = 4
	values["H"] = 4
	values["V"] = 4
	values["W"] = 4
	values["Y"] = 4
	values["K"] = 5
	values["J"] = 8
	values["X"] = 8
	values["Q"] = 10
	values["Z"] = 10

	return values
}
