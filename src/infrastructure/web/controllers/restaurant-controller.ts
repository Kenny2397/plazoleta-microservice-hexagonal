import { NextFunction, Request, Response } from 'express'
import { RestaurantService } from '../../../application/services/restaurant-service'
import { IRestaurantDTO } from '../../../application/dtos/restaurant-dto'
import { getUserMicroservice } from '../http/request'
import config from '../../../config'
import boom from '@hapi/boom'
import { ROLES } from '../utils/shared/role-constants'
// import { IUser } from '../interfaces/dtos/create-user'

export class RestaurantController {
  private readonly restaurantService: RestaurantService

  constructor (restaurantService: RestaurantService) {
    this.restaurantService = restaurantService
  }

  async create (req: Request, res: Response, next: NextFunction): Promise<void> {
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
}
