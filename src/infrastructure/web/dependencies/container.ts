
import { RestaurantController } from '../controllers/restaurant-controller'
import { RestaurantService } from '../../../application/services/restaurant-service'
import { IRestaurantRepository } from '../../../domain/repositories/irestaurant-repository'
import { SequelizeRestaurantRepository } from '../../database/repositories/sequelize-restaurant-repository'

import { IRoleRepository } from '../../../domain/repositories/irole-repository'
import { SequelizeRoleRepository } from '../../database/repositories/sequelize-role-repository'

const restaurantRepository: IRestaurantRepository = new SequelizeRestaurantRepository()
const roleRepository: IRoleRepository = new SequelizeRoleRepository()

const restaurantService: RestaurantService = new RestaurantService(restaurantRepository, roleRepository)

export const restaurantController: RestaurantController = new RestaurantController(restaurantService)
