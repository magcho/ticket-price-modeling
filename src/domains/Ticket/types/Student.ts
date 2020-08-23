import { Customer } from "../../Customer/Customer"
import { ScreenTime } from "../../Screen/ScreenTime"
import { Price } from "../Price"
import { PriceTable, Ticket } from "../Ticket"

export class StudentTicket extends Ticket {
  constructor(customer: Customer, screenTime: ScreenTime) {
    if (!customer.hasCertificate("StudentIdentification")) {
      throw new Error("Identification Error")
    }

    const priceTable: PriceTable = {
      weekday: {
        normal: new Price(1500),
        late: new Price(1300)
      },
      weekend: {
        normal: new Price(1500),
        late: new Price(1300)
      },
      cinemaday: new Price(1100)
    }

    super(priceTable, screenTime.startDate(), "学生（大・専）")
  }
}
