// Package clock add or removes time from a clock
package clock

import (
	"fmt"
)

// Clock holds the value of the hours and minutes of the clock
type Clock struct {
	time int
}

// Add increases the current time by n minutes
func (c Clock) Add(minutes int) Clock {
	return New(0, c.time+minutes)
}

// Subtract decreases the current time by n minutes
func (c Clock) Subtract(minutes int) Clock {
	return New(0, c.time-minutes)
}

func (c Clock) String() string {
	return fmt.Sprintf("%02d:%02d", c.time/60, c.time%60)
}

// New creates a new Clock
func New(hour, minute int) Clock {
	m := minute + hour*60
	m %= 24 * 60
	if m < 0 {
		m += 24 * 60
	}

	return Clock{m}
}
