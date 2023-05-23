import { RestaurantModel } from '../models/irestaurant-model'

export interface IRestaurantRepository {
  findById: (id: number) => Promise<RestaurantModel | null>
  findByNit: (nit: number) => Promise<RestaurantModel | null>
  save: (restaurantData: RestaurantModel) => Promise<RestaurantModel>
  update: (id: number, restaurantData: RestaurantModel) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<RestaurantModel[]>
}
