// Given a year, report if it is a leap year
package leap

func IsLeapYear(year int) bool {
	if year%4 != 0 {
		return false
	}

	if year%100 == 0 {
		return year%400 == 0
	}

	return true
}
