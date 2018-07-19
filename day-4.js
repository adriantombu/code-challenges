// https://twitter.com/AirbusCareers/status/1018076758606786560
const atob = require('atob')

const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const reversedAlphabet = [ 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A' ]
const challenge = `82 51 78 50 73 69 104 119 89 105 66 83 97 67 66 78 98 71 99 103 82 51 78 50 73 69 57 121 98 110 74 110`

let answer = ''

let step1 = ''
const letters = challenge.split(' ')

for (const letter of letters) {
  const translated = String.fromCodePoint(letter)

  step1 += translated
}

const revAnswer = atob(step1) // Gsv Hpb Rh Mlg Gsv Ornrg

for (let i = 0; i < revAnswer.length; i++) {
  let result = ' '
  const revLetter = revAnswer[i]

  if (revLetter !== ' ') {
    const isLowercase = revLetter === revLetter.toLowerCase()
    const offset = alphabet.indexOf(revLetter.toUpperCase())
    const decoded = reversedAlphabet[offset]

    result = isLowercase ? decoded.toLowerCase() : decoded
  }

  answer += result
}

console.log(answer) // The Sky Is Not The Limit
