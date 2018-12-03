/*
  PermMissingElem
  Find the missing element in a given permutation
  https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
*/

const solution = (arr) => {
  arr.sort((a, b) => a - b) // sorts alphabetically by default

  for (let i=0; i < arr.length; i++) {
    if (arr[i+1] - arr[i] > 1) {
      return arr[i] + 1
    }
  }
}

solution([ 2, 3, 1, 5 ]) // 4

const test = Array.from(new Array(100000), (val, i) => i)
const rand = Math.round(Math.random() * 100000)

test.splice(rand, 1)

solution(test) // rand
