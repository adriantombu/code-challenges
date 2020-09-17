package collatzconjecture

import (
	"fmt"
)

func CollatzConjecture(value int) (int, error) {
	if value <= 0 {
		return 0, fmt.Errorf("The number must be bigger than 0, got %d", value)
	}

	if value == 1 {
		return 0, nil
	}

	return process(value, 0)
}

func process(value int, steps int) (int, error) {
	steps++

	if (value % 2) == 0 {
		value /= 2
	} else {
		value = (value * 3) + 1
	}

	if value == 1 {
		return steps, nil
	}

	return process(value, steps)
}
