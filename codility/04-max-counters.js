/*
  MaxCounters
  Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
  https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
*/

const solution = (nb, arr) => {
  const counters = new Array(nb).fill(0)

  for (const indice of arr) {
    if (indice > nb) {
      const max = Math.max.apply(null, counters) // Get the max value in counters
      counters.fill(max)
      continue
    }

    counters[indice - 1]++
  }

  return counters
}

solution(5, [ 3, 4, 4, 6, 1, 4, 4 ]) // [ 3, 2, 2, 4, 2 ]
