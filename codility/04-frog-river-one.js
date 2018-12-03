/*
  FrogRiverOne
  Find the earliest time when a frog can jump to the other side of a river
  https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
*/

const solution = (width, arr) => {
  let path = Array.from(new Array(width), (val, i) => i + 1)

  for(let i=0; i < arr.length; i++) {
    const indice = path.indexOf(arr[i])

    if (indice !== -1) {
      path.splice(indice, 1)

      if (path.length === 0) {
        return i
      }
    }
  }

  return -1
}

solution(5, [ 1, 3, 1, 4, 2, 3, 5, 4 ]) // 6
solution(2, [ 1, 3, 1, 4, 2, 3, 5, 4 ]) // 4
solution(6, [ 1, 3, 1, 4, 2, 3, 5, 4 ]) // -1
