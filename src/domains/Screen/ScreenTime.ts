export class ScreenTime {
  private _startDate: Date
  constructor(startDate: Date) {
    this._startDate = startDate
  }

  public startDate(): Date {
    return this._startDate
  }

  public formatStr(): string {
    return `${this._startDate.getMonth()}月${this._startDate.getDate()}日 ${this._startDate.getHours()}:${this._startDate.getMinutes()}`
  }
}
