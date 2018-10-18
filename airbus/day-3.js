// https://twitter.com/AirbusCareers/status/1017808083173691392
const atob = require('atob')

const challenge = 'Vm0xd1MxWnNiM2hpUm14VVlsaG9TMVZzVm1Ga01XdDVUVlYwVGxZd05IcFZSbEYzVUZFSw'

const answer = atob(atob(atob(atob(atob(challenge)))))

console.log(answer) // 'We are Airbus'
