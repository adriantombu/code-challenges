export class ResistorColor {
  private readonly colors: string[];
  private readonly values: string[] = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ];

  constructor(colors: string[]) {
    if (colors.length < 2) {
      throw "At least two colors need to be present";
    }

    this.colors = colors;
  }

  value = (): number =>
    10 * this.values.indexOf(this.colors[0]) +
    this.values.indexOf(this.colors[1]);
}
