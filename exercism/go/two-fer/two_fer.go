// Package twofer implements a very interesting function
package twofer

import "fmt"

// ShareWith returns a string with a message depending of a name
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}

	return fmt.Sprintf("One for %s, one for me.", name)
}
