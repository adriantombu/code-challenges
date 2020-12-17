package robotname

import (
	"math/rand"
	"time"
)

var random = rand.New(rand.NewSource(time.Now().UnixNano()))

// numbers holds all of the existing robots names to avoid duplicates
var numbers = map[string]bool{}

// Robot holds the identifier of a robot
type Robot struct {
	ID string
}

// Name returns the name of the robot
func (r *Robot) Name() (string, error) {
	if r.ID != "" {
		return r.ID, nil
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
	delete(numbers, r.ID)
	r.ID = ""
}

func newID() string {
	return randomLetter() + randomLetter() + randomNumber() + randomNumber() + randomNumber()
}

func randomLetter() string {
	return randomString(65, 90)
}

func randomNumber() string {
	return randomString(48, 57)
}

func randomString(min, max int) string {
	return string(rune(random.Intn(max-min+1) + min))
}
