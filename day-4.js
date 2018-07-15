// https://twitter.com/AirbusCareers/status/1018076758606786560

const challenge =
`82 51 78 50 73
69 104 119 89
105 66 83 97 67
66 78 98 71 99
103 82 51 78 50
73 69 57 121 98
110 74 110`

let answer = ''
const lines = challenge.split("\n")

for (const line of lines) {
  const letters = line.split(' ')

  for (const letter of letters) {
    const translated = String.fromCodePoint(letter)

    answer += translated
  }
}

console.log(answer) // R3N2IEhwYiBSaCBNbGcgR3N2IE9ybnJn
