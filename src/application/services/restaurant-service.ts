import boom from '@hapi/boom'
import { RestaurantModel } from '../../domain/models/irestaurant-model'
import { IRestaurantDTO } from '../dtos/restaurant-dto'
import { IRestaurantRepository } from '../../domain/repositories/irestaurant-repository'
import { IDishRepository } from '../../domain/repositories/idish-repository'
// import { ICategoryRepository } from '../../domain/repositories/icategory-repository'

export class RestaurantService {
  private readonly restaurantRepository: IRestaurantRepository
  private readonly dishRepository: IDishRepository

  constructor (restaurantRepository: IRestaurantRepository, dishRepository: IDishRepository) {
    this.restaurantRepository = restaurantRepository
    this.dishRepository = dishRepository
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

  async getRestaurantByOwnerId (ownerId: number): Promise<RestaurantModel | null> {
    const restaurant = await this.restaurantRepository.findByOwnerId(ownerId)
    return restaurant
  }

  async getAllRestaurants (query: any): Promise<RestaurantModel[]> {
    const options: any = {
      attributes: ['id', 'name', 'urlLogo'],
      order: [
        ['name', 'ASC']
      ]
    }
    const { limit, offset } = query
    if (limit !== undefined) {
      options.limit = parseInt(limit, 10) ?? 10
    }
    if (offset !== undefined) {
      options.offset = parseInt(offset, 10) ?? 0
    }
    const restaurants = await this.restaurantRepository.findAll(options)
    return restaurants
  }

  async getDishesRestaurantService (id: number, query: any, models: any): Promise<RestaurantModel | null> {
    console.log('service')
    const restaurant = await this.restaurantRepository.findById(id)
    if (restaurant === null) {
      throw boom.notFound('restaurant not found')
    }
    const options: any = {
      where: {
        restaurantId: id
      },
      include: [
        {
          as: 'category',
          model: models.Category
        },
        {
          as: 'restaurant',
          model: models.Restaurant
        }
      ],
      group: ['Dish.category_id', 'Dish.id']
    }
    const { limit, offset } = query
    // console.log('****', limit, typeof limit)
    if (limit !== undefined) {
      options.limit = parseInt(limit, 10) ?? 10
    }
    if (offset !== undefined) {
      options.offset = parseInt(offset, 10) ?? 0
    }
    // console.log('options', options)
    const dishes: any = await this.dishRepository.findAll(options)
    // console.log(dishes[0])
    const dishesByCategory = dishes.reduce((result: any, dish: any) => {
      const category = dish.category.name
      // console.log(result, category)
      if (result[category] === undefined) {
        result[category] = []
      }
      result[category].push(dish)
      return result
    }
    , {})

    return dishesByCategory
  }
}
