// Package encode implements run-length encoding and decoding.
package encode

import (
	"fmt"
	"strconv"
	"strings"
)

// RunLengthEncode encodes a string using run-length encoding
func RunLengthEncode(input string) string {
	if len(input) < 1 {
		return ""
	}

	var res string
	var prev rune
	count := 1

	for _, char := range input {
		if char != prev {
			if prev != 0 {
				if count == 1 {
					count = -1
				}
				res = fmt.Sprintf("%s%d%s", res, count, string(prev))
			}

			prev = char
			count = 1
		} else {
			count++
		}
	}

	if count == 1 {
		count = -1
	}
	res = fmt.Sprintf("%s%d%s", res, count, string(prev))

	return strings.ReplaceAll(string(res), "-1", "")
}

// RunLengthDecode decodes run-length encoded string
func RunLengthDecode(input string) string {
	//https://stackabuse.com/run-length-encoding/

	res := ""
	count := 0

	for i := 0; i < len(input); i++ {
		digit, err := strconv.Atoi(string(input[i]))
		if err == nil {
			count = digit

			digitNext, errNext := strconv.Atoi(string(input[i+1]))
			if errNext == nil {
				count = (count * 10) + digitNext
				i++
			}

			for j := 0; j < count; j++ {
				res = fmt.Sprintf("%s%s", res, string(input[i+1]))
			}

			count = 0
			i++
		} else {
			res = fmt.Sprintf("%s%s", res, string(input[i]))
		}
	}

	return res
}
