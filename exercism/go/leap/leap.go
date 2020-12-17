// Given a year, report if it is a leap year
package leap

func IsLeapYear(year int) bool {
	 return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)
}
