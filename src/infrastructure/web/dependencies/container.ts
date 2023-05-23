
import { RestaurantController } from '../controllers/restaurant-controller'
import { RestaurantService } from '../../../application/services/restaurant-service'
import { IRestaurantRepository } from '../../../domain/repositories/irestaurant-repository'
import { SequelizeRestaurantRepository } from '../../database/repositories/sequelize-restaurant-repository'

import { CategoryController } from '../controllers/category-controller'
import { CategoryService } from '../../../application/services/category-service'
import { ICategoryRepository } from '../../../domain/repositories/icategory-repository'
import { SequelizeCategoryRepository } from '../../database/repositories/sequelize-category-repository'

import { DishController } from '../controllers/dish-controller'
import { DishService } from '../../../application/services/dish-service'
import { IDishRepository } from '../../../domain/repositories/idish-repository'
import { SequelizeDishRepository } from '../../database/repositories/sequelize-dish-repository'

const restaurantRepository: IRestaurantRepository = new SequelizeRestaurantRepository()
const restaurantService: RestaurantService = new RestaurantService(restaurantRepository)
export const restaurantController: RestaurantController = new RestaurantController(restaurantService)

const categoryRepository: ICategoryRepository = new SequelizeCategoryRepository()
const categoryService: CategoryService = new CategoryService(categoryRepository)
export const categoryController: CategoryController = new CategoryController(categoryService)

const dishRepository: IDishRepository = new SequelizeDishRepository()
const dishService: DishService = new DishService(dishRepository)
export const dishController: DishController = new DishController(dishService, categoryService, restaurantService)
