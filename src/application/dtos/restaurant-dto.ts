export interface IRestaurantDTO {
  id?: number
  name: string
  address: string
  phone: string
  urlLogo: string
  nit: number
  ownerId: number
  createdAt?: Date
}
