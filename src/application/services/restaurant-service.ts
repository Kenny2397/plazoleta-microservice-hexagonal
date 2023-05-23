import boom from '@hapi/boom'
import { RestaurantModel } from '../../domain/models/irestaurant-model'
import { IRestaurantDTO } from '../dtos/restaurant-dto'
import { IRestaurantRepository } from '../../domain/repositories/irestaurant-repository'

export class RestaurantService {
  private readonly restaurantRepository: IRestaurantRepository

  constructor (restaurantRepository: IRestaurantRepository) {
    this.restaurantRepository = restaurantRepository
  }

  async createRestaurant (restaurantDto: IRestaurantDTO): Promise<RestaurantModel> {
    const existingRestaurant = await this.restaurantRepository.findByNit(restaurantDto.nit)
    if (existingRestaurant !== null) {
      throw boom.conflict('restaurant already exists')
    }

    const createdRestaurant = await this.restaurantRepository.save(restaurantDto)
    return createdRestaurant
  }

  async getRestaurantByNit (nit: number): Promise<RestaurantModel | null> {
    const restaurant = await this.restaurantRepository.findByNit(nit)
    return restaurant
  }

  async getRestaurantById (id: number): Promise<RestaurantModel | null> {
    const restaurant = await this.restaurantRepository.findById(id)
    return restaurant
  }
}
