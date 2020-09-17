// Package twofer implements a very interesting function
package twofer

import "fmt"

// Given a name, return a string with the message
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}

	return fmt.Sprintf("One for %s, one for me.", name)
}
