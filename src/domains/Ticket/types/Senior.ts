import { Customer } from "../../Customer/Customer"
import { ScreenTime } from "../../Screen/ScreenTime"
import { Price } from "../Price"
import { PriceTable, Ticket } from "../Ticket"

export class SeniorTicket extends Ticket {
  constructor(customer: Customer, screenTime: ScreenTime) {
    if (customer.age().age() < 70) {
      throw new Error("Not old enough")
    }
    if (!customer.hasCertificate("Identification")) {
      throw new Error("Identification Error")
    }

    const priceTable: PriceTable = {
      weekday: {
        normal: new Price(1100),
        late: new Price(1100)
      },
      weekend: {
        normal: new Price(1100),
        late: new Price(1100)
      },
      cinemaday: new Price(1100)
    }

    super(priceTable, screenTime.startDate(), "シニア（70才以上）")
  }
}
