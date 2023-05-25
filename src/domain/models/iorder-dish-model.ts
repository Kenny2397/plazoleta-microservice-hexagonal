export interface OrderDishProps {
  id?: number
  amount: number
  orderId: number
  dishId: number
  createdAt?: Date
}

export class OrderDishModel {
  public readonly id?: number
  public readonly amount: number
  public readonly orderId: number
  public readonly dishId: number
  public readonly createdAt?: Date

  constructor (props: OrderDishProps) {
    this.id = props.id
    this.amount = props.amount
    this.orderId = props.orderId
    this.dishId = props.dishId
    this.createdAt = props.createdAt
  }
}
