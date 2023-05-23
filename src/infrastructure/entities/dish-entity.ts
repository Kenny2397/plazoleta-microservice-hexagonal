export interface DishEntity {
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
