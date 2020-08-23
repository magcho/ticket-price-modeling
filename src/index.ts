import { Certificate } from "./domains/Customer/Certificate"
import { Customer } from "./domains/Customer/Customer"
import { ScreenTime } from "./domains/Screen/ScreenTime"
import ticketFactory from "./domains/Ticket/TicketFactory"

const customer = new Customer(5, [
  new Certificate("StudentHandbook"),
  new Certificate("Identification"),
  new Certificate("DisabilityHandbook")
])
const screenTime = new ScreenTime(new Date("2020/9/23(月) 13:30:00"))
const ticket = ticketFactory(customer, screenTime)

console.log(customer, screenTime.formatStr())
console.log(ticket.label(), ticket.price().formatStr())
