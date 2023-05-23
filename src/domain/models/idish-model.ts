export interface DishProps {
  id?: number
  name: string
  description: string
  price: number
  urlImage: string
  active?: boolean
  categoryId?: number
  restaurantId?: number
  createdAt?: Date
}

export class DishModel {
  public readonly id?: number
  public readonly name: string
  public readonly description: string
  public readonly price: number
  public readonly urlImage: string
  public readonly active?: boolean
  public readonly categoryId?: number
  public readonly restaurantId?: number
  public readonly createdAt?: Date

  constructor (props: DishProps) {
    this.id = props.id
    this.name = props.name
    this.description = props.description
    this.price = props.price
    this.urlImage = props.urlImage
    this.active = props.active
    this.categoryId = props.categoryId
    this.restaurantId = props.restaurantId
    this.createdAt = props.createdAt
  }
}
