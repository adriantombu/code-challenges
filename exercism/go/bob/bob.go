// A conversational partner for Bob
package bob

import (
	"regexp"
	"strings"
)

func Hey(remark string) string {
	remark = strings.TrimSpace(remark)

	// He says 'Fine. Be that way!' if you address him without actually saying anything.
	if remark == "" {
		return "Fine. Be that way!"
	}

	// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
	if isYelling(remark) {
		if isQuestionning(remark) {
			return "Calm down, I know what I'm doing!"
		}

		// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
		return "Whoa, chill out!"
	}

	// Bob answers 'Sure.' if you ask him a question, such as "How are you?".
	if isQuestionning(remark) {
		return "Sure."
	}

	// He answers 'Whatever.' to anything else.
	return "Whatever."
}

func isYelling(remark string) bool {
	var regex = regexp.MustCompile(`[A-Za-z]+`)

	return strings.ToUpper(remark) == remark && regex.Find([]byte(remark)) != nil
}

func isQuestionning(remark string) bool {
	return string(remark[len(remark)-1]) == "?"
}
