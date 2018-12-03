/*
  OddOccurrencesInArray
  Find value that occurs in odd number of elements
  https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
*/

const solution = arr => {
  const values = [];

  for (const nbr of arr) {
    const indice = values.indexOf(nbr)

    if (indice === -1) {
      values.push(nbr)
    } else {
      values.splice(indice, 1)
    }
  }

  return values[0]
}

solution([ 9, 3, 9, 3, 9, 7, 9 ]) // 7
