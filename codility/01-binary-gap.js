/*
  BinaryGap
  Find longest sequence of zeros in binary representation of an integer
  https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
*/

const solution = value => {
  const binary = value.toString(2)
  const regex = /(?=(10+1))/g
  let zeroes = []

  // Handle the matching overlap
  while (match = regex.exec(binary)) {
    if (match.index === regex.lastIndex) {
        regex.lastIndex++
    }

    zeroes.push(match[1])
  }

  zeroes = zeroes.sort(((a, b) => b.length - a.length))

  return zeroes[0] ? zeroes[0].length - 2 : 0
}

solution(9) // 2
solution(15) // 0
solution(20) // 1
solution(32) // 0
solution(529) // 4
solution(1041) // 5
solution(52133123) // 6
solution(134218026) // 18
