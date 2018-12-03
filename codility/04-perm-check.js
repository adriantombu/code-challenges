/*
  PermCheck
  Check whether array A is a permutation
  https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
*/

const solution = arr => {
  arr.sort((a, b) => a - b) // sorts alphabetically by default

  return arr.length === arr[arr.length - 1]
}

solution([ 4, 1, 3, 2 ]) // true
solution([ 4, 1, 3 ]) // false

const test = Array.from(new Array(100000), (val, i) => i + 1)
solution(test) // true
