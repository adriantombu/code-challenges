// https://twitter.com/AirbusCareers/status/1017410547665403905

const challenge =
`35 31 B0 31
36 27 34 31
2E 38 22 4E
20 30 B0 34
35 27 32 34
2E 31 22 57`

let answer = ''
const lines = challenge.split("\n")

for (const line of lines) {
  const letters = line.split(' ')

  for (const letter of letters) {
    const base10 = parseInt(letter, 16)
    const translated = String.fromCodePoint(base10)

    answer += translated
  }
}

console.log(answer) // 51°16'41.8"N 0°45'24.1"W (Farnborough International Exhibition and Conference Centre)
