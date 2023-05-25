import { NextFunction, Request, Response } from 'express'
import { RestaurantService } from '../../../application/services/restaurant-service'
import { IRestaurantDTO } from '../../../application/dtos/restaurant-dto'
import { getUserMicroservice } from '../http/request'
import config from '../../../config'
import boom from '@hapi/boom'
import { ROLES } from '../utils/shared/role-constants'
import { sequelize } from './../../libs/sequelize'
// import { IUser } from '../interfaces/dtos/create-user'

export class RestaurantController {
  private readonly restaurantService: RestaurantService

  constructor (restaurantService: RestaurantService) {
    this.restaurantService = restaurantService
  }

  async createRestaurant (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, address, phone, urlLogo, nit, ownerId } = req.body
      const userMicroservice = await getUserMicroservice(config.userMicroservice, ownerId)
      console.log(userMicroservice.data.roleId)
      if (userMicroservice?.data.roleId !== ROLES.OWNER) {
        throw boom.conflict('user OwnerId is not owner')
      }
      const restaurant: IRestaurantDTO = {
        name,
        address,
        phone,
        urlLogo,
        nit,
        ownerId
      }
      const newRestaurant = await this.restaurantService.createRestaurant(restaurant)
      res.status(201).json(newRestaurant)
    } catch (error) {
      next(error)
    }
  }

  async getAllRestaurants (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const query = req.query
      const restaurants = await this.restaurantService.getAllRestaurants(query)
      res.status(200).json(restaurants)
    } catch (error) {
      next(error)
    }
  }

  async getDishesRestaurant (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('controller')
    try {
      const { id } = req.params
      console.log(typeof req.query.limit)
      const models = sequelize.models
      const dishes = await this.restaurantService.getDishesRestaurantService(Number(id), req.query, models)
      res.status(200).json(dishes)
    } catch (error) {
      next(error)
    }
  }
}
