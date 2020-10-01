package strain

// Ints is a list of int
type Ints []int

// Lists is a list of a list of int
type Lists [][]int

// Strings is a list of strings
type Strings []string

// Keep produces a list of Ints that matches a given function
func (list Ints) Keep(fn func(int) bool) Ints {
	var res Ints

	for _, val := range list {
		if fn(val) {
			res = append(res, val)
		}
	}

	return res
}

// Discard produces a list of Ints that do not match a given function
func (list Ints) Discard(fn func(int) bool) Ints {
	return list.Keep(func(n int) bool { return !fn(n) })
}

// Keep produces a list of Lists that matches a given function
func (list Lists) Keep(fn func([]int) bool) Lists {
	var res Lists

	for _, val := range list {
		if fn(val) {
			res = append(res, val)
		}
	}

	return res
}

// Keep produces a list of Lists that matches a given function
func (list Strings) Keep(fn func(string) bool) Strings {
	var res Strings

	for _, val := range list {
		if fn(val) {
			res = append(res, val)
		}
	}

	return res
}
