import { Customer } from "../../Customer/Customer"
import { ScreenTime } from "../../Screen/ScreenTime"
import { Price } from "../Price"
import { PriceTable, Ticket } from "../Ticket"

export class NormalDisabilityTicket extends Ticket {
  constructor(customer: Customer, screenTime: ScreenTime) {
    // TODO: 学生を判定する要素が年齢しかないのはまずい
    if (!(customer.age().age() >= 19)) {
      throw new Error("Age Error")
    }
    if (!customer.hasCertificate("DisabilityHandbook")) {
      throw new Error("Identificate error")
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

    super(priceTable, screenTime.startDate(), "障がい者（学生以上）")
  }
}
