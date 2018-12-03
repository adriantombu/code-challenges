/*
  PassingCars
  Count the number of passing cars on the road
  https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
*/

const solution = arr => {
  let total = 0;

  for (let i=0; i < arr.length; i++) {
    if (arr[i] === 1) {
      continue
    }

    const res = arr.slice(i)

    for (let j=0; j < res.length; j++) {
      if (res[j] === 1) {
        total++

        if (total > 1000000000) {
          return -1
        }
      }
    }
  }

  return total
}

solution([ 0, 1, 0, 1, 1 ]) // 5

solution(Array.from(new Array(10000), (val, i) => Math.round(Math.random())))
