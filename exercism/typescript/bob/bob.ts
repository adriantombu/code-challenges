export default class Bob {
  private isQuestion = (remark: string): boolean => remark.endsWith('?')

  hey(input: string): string {
    const remark = input.trim()

    if (remark === '') {
      return 'Fine. Be that way!'
    }

    if (remark === remark.toUpperCase() && !!remark.match(/[A-Za-z]+/)) {
      return this.isQuestion(remark) ? "Calm down, I know what I'm doing!" : 'Whoa, chill out!'
    }

    if (this.isQuestion(remark)) {
      return 'Sure.'
    }

    return 'Whatever.'
  }
}
