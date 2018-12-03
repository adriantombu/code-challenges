/*
  TapeEquilibrium
  Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|
  https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
*/

const solution = arr => {
  let min = Number.MAX_SAFE_INTEGER

  for (let i=1; i < arr.length; i++) {
    const start = arr.slice(0, i)
    const end = arr.slice(i, arr.length)

    const startSum = start.reduce((total, val) => total + val, 0)
    const endSum = end.reduce((total, val) => total + val, 0)

    const difference = Math.abs(startSum - endSum)

    if (difference < min) {
      min = difference
    }
  }

  return min
}

solution([ 3, 1, 2, 4, 3 ]) // 1
