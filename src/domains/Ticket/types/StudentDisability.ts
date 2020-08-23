import { Customer } from "../../Customer/Customer"
import { ScreenTime } from "../../Screen/ScreenTime"
import { Price } from "../Price"
import { PriceTable, Ticket } from "../Ticket"

export class StudentDisabilityTicket extends Ticket {
  constructor(customer: Customer, screenTime: ScreenTime) {
    // TODO: 学生を判定する要素が年齢しかないのはまずい
    if (!(customer.age().age() < 19)) {
      throw new Error("Age Error")
    }
    if (!customer.hasCertificate("DisabilityHandbook")) {
      throw new Error("Identificate error")
    }

    const priceTable: PriceTable = {
      weekday: {
        normal: new Price(900),
        late: new Price(900)
      },
      weekend: {
        normal: new Price(900),
        late: new Price(900)
      },
      cinemaday: new Price(900)
    }

    super(priceTable, screenTime.startDate(), "障がい者（高校以下）")
  }
}
