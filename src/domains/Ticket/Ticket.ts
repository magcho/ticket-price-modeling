import { isHoliday } from "@holiday-jp/holiday_jp"
import { Price } from "./Price"

export type TicketType =
  | "cinemaCitezen"
  | "normal"
  | "senior"
  | "student"
  | "pupil"
  | "child"
  | ""

export interface PriceTable {
  weekday: {
    normal: Price
    late: Price
  }
  weekend: {
    normal: Price
    late: Price
  }
  cinemaday: Price
}

export class Ticket {
  private readonly _price: Price
  private readonly _label: string

  constructor(priceTable: PriceTable, startDate: Date, label: string) {
    this._label = label

    if (startDate.getDate() === 1) {
      // 映画の日
      this._price = priceTable.cinemaday
    } else if (isHoliday(startDate)) {
      // 土日祝
      if (startDate.getHours() >= 20) {
        // レイトショー
        this._price = priceTable.weekend.late
      } else {
        // 通常営業
        this._price = priceTable.weekend.normal
      }
    } else {
      // 平日
      if (startDate.getHours() >= 20) {
        // レイトショー
        this._price = priceTable.weekday.late
      } else {
        // 通常営業
        this._price = priceTable.weekday.normal
      }
    }
  }

  public printMessage(): string {
    const buff = `2020-12-12 12:00上映開始\n料金${this._price.price()}円`
    return buff
  }

  public price(): Price {
    return this._price
  }

  public label(): string {
    return this._label
  }
}
