import { Customer } from "../../Customer/Customer"
import { ScreenTime } from "../../Screen/ScreenTime"
import { Price } from "../Price"
import { PriceTable, Ticket } from "../Ticket"

export class ChildTicket extends Ticket {
  constructor(customer: Customer, screenTime: ScreenTime) {
    // TODO: 小学生を判定する要素が年齢しかないのはまずい
    if (!(customer.age().age() <= 12)) {
      throw new Error("Age Error")
    }

    const priceTable: PriceTable = {
      weekday: {
        normal: new Price(1000),
        late: new Price(1000)
      },
      weekend: {
        normal: new Price(1000),
        late: new Price(1000)
      },
      cinemaday: new Price(1000)
    }

    super(priceTable, screenTime.startDate(), "幼児（3才以上）・小学生")
  }
}
