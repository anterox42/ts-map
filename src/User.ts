import faker from "faker"
import { Markable } from "./CustomMap"

export class User implements Markable {
  name: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.name = faker.name.firstName()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
