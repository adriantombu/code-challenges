export default class SpaceAge {
  public readonly seconds: number
  private readonly earth = 31557600

  constructor(seconds: number) {
    this.seconds = seconds
  }

  format = (multiplier: number): number => Math.round((this.seconds / (multiplier * this.earth)) * 100) / 100

  onEarth = (): number => this.format(1)
  onMercury = (): number => this.format(0.2408467)
  onVenus = (): number => this.format(0.61519726)
  onMars = (): number => this.format(1.8808158)
  onJupiter = (): number => this.format(11.862615)
  onSaturn = (): number => this.format(29.447498)
  onUranus = (): number => this.format(84.016846)
  onNeptune = (): number => this.format(164.79132)
}
