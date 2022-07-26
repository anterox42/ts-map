import faker from "faker"
import { Markable } from "./CustomMap"

export class Company implements Markable {
  name: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    }
  }

  markerContent(): string {
    return `
        <div>
            <h2>Company Name: ${this.name}</h2>
            <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
    `
  }
}
