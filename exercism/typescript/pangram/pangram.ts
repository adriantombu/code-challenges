export default class Pangram {
  private readonly input: string
  private readonly letters = [...'abcdefghijklmnopqrstuvwxyz']

  constructor(input: string) {
    this.input = input.toLowerCase()
  }

  isPangram = (): boolean => this.letters.every((l) => this.input.indexOf(l) > -1)
}
