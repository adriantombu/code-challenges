# https://twitter.com/AirbusCareers/status/1017047122884087808

const morse = [
	{ code: '.-', char: 'a' },
	{ code: '-...', char: 'b' },
	{ code: '-.-.', char: 'c' },
	{ code: '-..', char: 'd' },
	{ code: '.', char: 'e' },
	{ code: '..-.', char: 'f' },
	{ code: '--.', char: 'g' },
	{ code: '....', char: 'h' },
	{ code: '..', char: 'i' },
	{ code: '.---', char: 'j' },
	{ code: '-.-', char: 'k' },
	{ code: '.-..', char: 'l' },
	{ code: '--', char: 'm' },
	{ code: '-.', char: 'n' },
	{ code: '---', char: 'o' },
	{ code: '.--.', char: 'p' },
	{ code: '--.-', char: 'q' },
	{ code: '.-.', char: 'r' },
	{ code: '...', char: 's' },
	{ code: '-', char: 't' },
	{ code: '..-', char: 'u' },
	{ code: '...-', char: 'v' },
	{ code: '.--', char: 'w' },
	{ code: '-..-', char: 'x' },
	{ code: '-.--', char: 'y' },
	{ code: '--..', char: 'z' },
	{ code: '.-----', char: '1' },
	{ code: '..---', char: '2' },
	{ code: '...--', char: '3' },
	{ code: '....-', char: '4' },
	{ code: '.....', char: '5' },
	{ code: '-....', char: '6' },
	{ code: '--...', char: '7' },
	{ code: '---..', char: '8' },
	{ code: '----.', char: '9' },
	{ code: '-----', char: '0' },
	{ code: '.-.-.-', char: '.' },
	{ code: '--..--', char: ',' },
	{ code: '..--..', char: '?' },
	{ code: '.----.', char: '\'' },
	{ code: '-.-.--', char: '!' },
	{ code: '-..-.', char: '/' },
	{ code: '-.--.', char: '(' },
	{ code: '-.--.-', char: ')' },
	{ code: '.-...', char: '&' },
	{ code: '---...', char: ':' },
	{ code: '-.-.-.', char: ';' },
	{ code: '-...-', char: '=' },
	{ code: '.-.-.', char: '+' },
	{ code: '-....-', char: '-' },
	{ code: '..--.-', char: '_' },
	{ code: '.-..-.', char: '"' },
	{ code: '...-..-', char: '$' },
	{ code: '.--.-.', char: '@' },
]

const challenge =
`... .-. . . .-. .-
-.-. -..-. -- ---
-.-. .-.-.- ...
..- -... .-. .. .-
.-.-.- -.-- -. .-
.--. -- --- -.-.
-..-. -..-. ---...
.--. - - ....`

let answer = ''
const lines = challenge.split("\n")

for (line of lines) {
	const translated = line.split(' ').map(letter => morse.filter(sign => sign.code === letter)[0].char).reverse().join('')

	answer = translated + answer
}

console.log(answer)



