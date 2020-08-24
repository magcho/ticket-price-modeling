import { Certificate } from "./domains/Customer/Certificate"
import { Customer } from "./domains/Customer/Customer"
import { ScreenTime } from "./domains/Screen/ScreenTime"
import ticketFactory from "./domains/Ticket/TicketFactory"


console.log("大学生 平日 昼")

const customer = new Customer(21, [
  new Certificate("StudentIdentification"),
  new Certificate("Identification")
])
const screenTime = new ScreenTime(new Date("2020/9/23(月) 13:30:00"))
const ticket = ticketFactory(customer, screenTime)

console.log(ticket.label(), ticket.price().formatStr())





console.log("シニア 平日 昼")
const customer2 = new Customer(100, [
  new Certificate("Identification")
])
const screenTime2 = new ScreenTime(new Date("2020/9/23(月) 13:30:00"))
const ticket2 = ticketFactory(customer2, screenTime2)

console.log(ticket2.label(), ticket2.price().formatStr())
 


console.log("一般 レイトショー")

const customer3 = new Customer(30, [
])
const screenTime3 = new ScreenTime(new Date("2020/9/23(月) 21:30:00"))
const ticket3 = ticketFactory(customer3, screenTime3)

console.log(ticket3.label(), ticket3.price().formatStr())



console.log("シニア 昼 身分証なし")

const customer4 = new Customer(100, [
])
const screenTime4 = new ScreenTime(new Date("2020/9/23(月) 13:30:00"))
const ticket4 = ticketFactory(customer4, screenTime4)

console.log(ticket4.label(), ticket4.price().formatStr())


