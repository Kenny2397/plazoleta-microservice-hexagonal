
export interface IOrderDTO {
  id?: number
  status: string
  restaurantId: number
  chefId: number
  clientId: number
  createdAt?: Date
}

interface Order {
  id: number
  amount: number
}
export interface IOrderCreateDTO {
  restaurantId: number
  dishes: Order[]
}
