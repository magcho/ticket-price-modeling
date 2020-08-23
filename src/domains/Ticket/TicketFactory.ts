import { Customer } from "../Customer/Customer"
import { ScreenTime } from "../Screen/ScreenTime"
import { Ticket } from "./Ticket"
import { NormalTicket } from "./types/Normal"
import { SeniorTicket } from "./types/Senior"
import { StudentTicket } from "./types/Student"
import { PupilTicket } from "./types/Pupil"
import { NormalDisabilityTicket } from "./types/NormalDisability"
import { StudentDisabilityTicket } from "./types/StudentDisability"

const ticketFactory = (customer: Customer, screenTime: ScreenTime): Ticket => {
  const ticketVariation = [
    NormalTicket,
    SeniorTicket,
    StudentTicket,
    PupilTicket,
    NormalDisabilityTicket,
    StudentDisabilityTicket
  ]

  const potencialTickets: Ticket[] = []
  ticketVariation.map(ticketClass => {
    try {
      potencialTickets.push(new ticketClass(customer, screenTime))
    } catch {
      //
    }
  })

  potencialTickets.sort((a: Ticket, b: Ticket) => a.price().compare(b.price()))

  return potencialTickets[0]
}

export default ticketFactory
