export default class Transcriptor {
  private transcription: Transcription = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  invalidInput = (): void => {
    throw new Error("Invalid input DNA.");
  };

  toRna = (strand: string): string =>
    strand
      .split("")
      .map((n) => this.transcription[n] || this.invalidInput())
      .join("");
}

type Transcription = {
  [key: string]: string;
};
