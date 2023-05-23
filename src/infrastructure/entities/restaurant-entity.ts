export interface RestaurantEntity {
  id?: number
  name: string
  address: string
  phone: string
  urlLogo: string
  nit: number
  ownerId: number
  createdAt?: Date
}
