// Given a moment, determine the moment that would be after a gigasecond has passed.
package gigasecond

import "time"

const gigaseconds = 1e9

func AddGigasecond(t time.Time) time.Time {
	return t.Add(time.Second * gigaseconds)
}
