import { Customer } from "../../Customer/Customer"
import { ScreenTime } from "../../Screen/ScreenTime"
import { Price } from "../Price"
import { PriceTable, Ticket } from "../Ticket"

export class NormalTicket extends Ticket {
  constructor(_: Customer, screenTime: ScreenTime) {
    const priceTable: PriceTable = {
      weekday: {
        normal: new Price(1800),
        late: new Price(1300)
      },
      weekend: {
        normal: new Price(1800),
        late: new Price(1300)
      },
      cinemaday: new Price(1100)
    }

    super(priceTable, screenTime.startDate(), "一般")
  }
}
