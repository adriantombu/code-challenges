/*
  Recursion: Fibonacci Numbers
  https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem
*/

function fibonacci (n) {
  if (n <= 0 || n > 30 || isNaN(n)) {
    return
  }

  let seq = [0, 1]

  if (n < 2) {
    return seq[n]
  }

  let i = 1
  while (n > i) {
    seq.push(seq[i - 1] + seq[i])
    i++
  }

  return seq[n]
}

console.log(fibonacci(-10)) // undefined
console.log(fibonacci(0)) // undefined
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)) // 2
console.log(fibonacci(30)) // 832040
console.log(fibonacci(50)) // undefined
