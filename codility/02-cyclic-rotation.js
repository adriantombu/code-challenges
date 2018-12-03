/*
  CyclicRotation
  Rotate an array to the right by a given number of steps.
*/

const solution = (arr, rot) => {
  if (rot === 0 || rot === arr.length) {
    return arr
  }

  while (rot > 0) {
    arr = [arr.pop(), ...arr]
    rot--
  }

  return arr
}

solution([3, 8, 9, 7, 6], 3) // [9, 7, 6, 3, 8]
solution([1, 2, 3, 4], 4) // [1, 2, 3, 4]
solution([0, 0, 0], 1) // [0, 0, 0]
solution([9, 1, 2], 0) // [9, 1, 2]
