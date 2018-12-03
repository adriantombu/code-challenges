/*
  MissingInteger
  Find the smallest positive integer that does not occur in a given sequence
  https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
*/

const solution = arr => {
  arr.sort((a, b) => a - b) // sorts alphabetically by default
  arr = arr.filter(val => val > 0)

  if (arr.length === 0) {
    return 1
  }

  for (let i=0; i < arr.length; i++) {
    if (arr[i+1] - arr[i] > 1) {
      return arr[i] + 1
    }
  }

  return arr[arr.length - 1] + 1
}

solution([ 1, 3, 6, 4, 1, 2 ]) // 5
solution([ 1, 2, 3 ]) // 4
solution([ -1, -3 ]) // 1
