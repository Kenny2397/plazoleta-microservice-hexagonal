import { NextFunction, Request, Response } from 'express'
import { DishService } from '../../../application/services/dish-service'
import { IDishDTO } from '../../../application/dtos/dish-dto'
import { CategoryService } from '../../../application/services/category-service'
import boom from '@hapi/boom'
import { RestaurantService } from '../../../application/services/restaurant-service'

export class DishController {
  private readonly dishService: DishService
  private readonly categoryService: CategoryService
  private readonly restaurantService: RestaurantService

  constructor (dishService: DishService, categoryService: CategoryService, restaurantService: RestaurantService) {
    this.dishService = dishService
    this.categoryService = categoryService
    this.restaurantService = restaurantService
  }

  async createDish (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { name, description, price, urlImage, categoryId, restaurantId } = req.body

      const category = await this.categoryService.getCategoryById(Number(categoryId))
      // console.log('-----****', category)
      if (category === null) {
        throw boom.notFound('Category not found')
      }
      const restaurant = await this.restaurantService.getRestaurantById(Number(restaurantId))
      // console.log('-----****', restaurant)
      if (restaurant === null) {
        throw boom.notFound('Restaurant not found')
      }
      const dish: IDishDTO = {
        name,
        description,
        price,
        urlImage,
        categoryId
      }

      const newDish = await this.dishService.createDish(dish)
      res.status(201).json(newDish)
    } catch (error) {
      next(error)
    }
  }
}
