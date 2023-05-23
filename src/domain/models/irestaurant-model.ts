export interface RestaurantProps {
  id?: number
  name: string
  address: string
  phone: string
  urlLogo: string
  nit: number
  ownerId: number
  createdAt?: Date
}

export class RestaurantModel {
  public readonly id?: number
  public readonly name: string
  public readonly address: string
  public readonly phone: string
  public readonly urlLogo: string
  public readonly nit: number
  public readonly ownerId: number
  public readonly createdAt?: Date

  constructor (props: RestaurantProps) {
    this.id = props.id
    this.name = props.name
    this.address = props.address
    this.phone = props.phone
    this.urlLogo = props.urlLogo
    this.nit = props.nit
    this.ownerId = props.ownerId
    this.createdAt = props.createdAt
  }
}
