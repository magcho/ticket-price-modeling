import { Customer } from "../../Customer/Customer"
import { ScreenTime } from "../../Screen/ScreenTime"
import { Price } from "../Price"
import { PriceTable, Ticket } from "../Ticket"

export class PupilTicket extends Ticket {
  constructor(customer: Customer, screenTime: ScreenTime) {
    if (!customer.hasCertificate("StudentHandbook")) {
      throw new Error("Identification Error")
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

    super(priceTable, screenTime.startDate(), "中・高校生")
  }
}
