export interface OrderProps {
  id?: number
  status: string
  restaurantId?: number
  chefId?: number
  clientId?: number
  createdAt?: Date
}

export class OrderModel {
  public readonly id?: number
  public readonly status: string
  public readonly restaurantId?: number
  public readonly chefId?: number
  public readonly clientId?: number
  public readonly createdAt?: Date

  constructor (props: OrderProps) {
    this.id = props.id
    this.status = props.status
    this.restaurantId = props.restaurantId
    this.chefId = props.chefId
    this.clientId = props.clientId
    this.createdAt = props.createdAt
  }
}
