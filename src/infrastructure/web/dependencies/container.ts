
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

import { OrderController } from '../controllers/order-controller'
import { OrderService } from '../../../application/services/order-service'
import { IOrderRepository } from '../../../domain/repositories/iorder-repository'
import { SequelizeOrderRepository } from '../../database/repositories/sequelize-order-repository'

import { OrderDishController } from '../controllers/order-dish-controller'
import { OrderDishService } from '../../../application/services/order-dish-service'
import { IOrderDishRepository } from '../../../domain/repositories/iorder-dish-repository'
import { SequelizeOrderDishRepository } from '../../database/repositories/sequelize-order-dish-repository'

const categoryRepository: ICategoryRepository = new SequelizeCategoryRepository()
const dishRepository: IDishRepository = new SequelizeDishRepository()
const restaurantRepository: IRestaurantRepository = new SequelizeRestaurantRepository()
const orderRepository: IOrderRepository = new SequelizeOrderRepository()
const orderDishRepository: IOrderDishRepository = new SequelizeOrderDishRepository()

const categoryService: CategoryService = new CategoryService(categoryRepository)
const dishService: DishService = new DishService(dishRepository)
const restaurantService: RestaurantService = new RestaurantService(restaurantRepository, dishRepository)
const orderService: OrderService = new OrderService(orderRepository, restaurantRepository, orderDishRepository)
const orderDishService: OrderDishService = new OrderDishService(orderDishRepository)

export const categoryController: CategoryController = new CategoryController(categoryService)
export const dishController: DishController = new DishController(dishService, categoryService, restaurantService)
export const restaurantController: RestaurantController = new RestaurantController(restaurantService)
export const orderController: OrderController = new OrderController(orderService)
export const orderDishController: OrderDishController = new OrderDishController(orderDishService)
