export class Price {
  private _price: number

  constructor(amount: number) {
    this._price = amount
  }

  public price(): number {
    return this._price
  }

  public compare(otherPrice: Price) {
    if (this._price > otherPrice._price) {
      return 1
    }
    if (this._price < otherPrice._price) {
      return -1
    }
    return 0
  }

  public formatStr(): string {
    return `${this._price}円`
  }
}
