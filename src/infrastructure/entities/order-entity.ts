export interface OrderEntity {
  id?: number
  status: string
  restaurantId?: number
  chefId?: number
  clientId?: number
  createdAt?: Date
}
