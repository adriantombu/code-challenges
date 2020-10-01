// Package listops implements basic list operations
package listops

// IntList represents a list of integers
type IntList []int

type binFunc func(int, int) int
type predFunc func(int) bool
type unaryFunc func(int) int

// Foldr - given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator from the
// right using function(item, accumulator))
func (list IntList) Foldr(fn binFunc, initial int) int {
	for i := len(list); i > 0; i-- {
		initial = fn(list[i-1], initial)
	}

	return initial
}

// Foldl - given a function, a list, and initial accumulator, fold (reduce) each item into the accumulator from the
// left using function(accumulator, item))
func (list IntList) Foldl(fn binFunc, initial int) int {
	for _, val := range list {
		initial = fn(initial, val)
	}

	return initial
}

// Filter - given a predicate and a list, return the list of all items for which predicate(item) is True
func (list IntList) Filter(fn predFunc) IntList {
	res := IntList{}

	for _, val := range list {
		if fn(val) {
			res = append(res, val)
		}
	}

	return res
}

// Length - given a list, return the total number of items within it
func (list IntList) Length() int {
	var length int

	for range list {
		length++
	}

	return length
}

// Map - given a function and a list, return the list of the results of applying function(item) on all items
func (list IntList) Map(fn unaryFunc) IntList {
	res := IntList{}

	for _, val := range list {
		res = append(res, fn(val))
	}

	return res
}

// Reverse - given a list, return a list with all the original items, but in reversed order
func (list IntList) Reverse() IntList {
	res := IntList{}

	for i := len(list); i > 0; i-- {
		res = append(res, list[i-1])
	}

	return res
}

// Append - given two lists, add all items in the second list to the end of the first list
func (list IntList) Append(addList IntList) IntList {
	res := list

	for _, val := range addList {
		res = append(res, val)
	}

	return res
}

// Concat - given a series of lists, combine all items in all lists into one flattened list)
func (list IntList) Concat(ll []IntList) IntList {
	for _, v := range ll {
		list = list.Append(v)
	}

	return list
}
