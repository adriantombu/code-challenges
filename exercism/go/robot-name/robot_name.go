package robotname

import (
	"fmt"
	"math/rand"
	"time"
)

var random = rand.New(rand.NewSource(time.Now().UnixNano()))

// numbers holds all of the existing robots names to avoid duplicates
var numbers = map[string]bool{}
var maxNumbers = 26 * 26 * 10 * 10 * 10

// Robot holds the identifier of a robot
type Robot struct {
	ID string
}

// Name returns the name of the robot
func (r *Robot) Name() (string, error) {
	if r.ID != "" {
		return r.ID, nil
	}

	if len(numbers) >= maxNumbers {
		return "", fmt.Errorf("no more names available")
	}

	r.ID = newID()
	for numbers[r.ID] {
		r.ID = newID()
	}
	numbers[r.ID] = true

	return r.ID, nil
}

// Reset restores the Robot to factory settings and resets his name
func (r *Robot) Reset() {
	r.ID = ""
}

func newID() string {
	r1 := random.Intn(26) + 'A'
	r2 := random.Intn(26) + 'A'
	num := random.Intn(1000)
	return fmt.Sprintf("%c%c%03d", r1, r2, num)
}
