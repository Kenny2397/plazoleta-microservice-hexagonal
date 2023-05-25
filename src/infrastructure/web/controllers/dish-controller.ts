import { NextFunction, Request, Response } from 'express'
import { DishService } from '../../../application/services/dish-service'
import { IDishDTO, IUpdateDishDTO } from '../../../application/dtos/dish-dto'
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

  async updateDish (req: Request | any, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log(req.user)
      const restaurant = await this.restaurantService.getRestaurantByOwnerId(req?.user?.sub)
      // console.log('***', restaurant)
      if (restaurant === null) {
        throw boom.unauthorized('You are not authorized to update this dish because you are not the owner of the restaurant')
      }
      const { price, description } = req.body
      const { id } = req.params
      if (price === undefined && description === undefined) {
        throw boom.badRequest('Price or description must be provided')
      }
      const updateDishFields: IUpdateDishDTO = {
        price,
        description
      }
      if (price !== undefined) {
        updateDishFields.price = price
      }
      if (description !== undefined) {
        updateDishFields.description = description
      }

      const dishToUpdate = await this.dishService.getDishById(Number(id))
      if (dishToUpdate === null) {
        throw boom.notFound('Dish not found')
      }
      const updatedDish = await this.dishService.updateDish(Number(id), updateDishFields)
      res.status(200).json(updatedDish)
    } catch (error) {
      next(error)
    }
  }

  async toggleActiveDish (req: Request | any, res: Response, next: NextFunction): Promise<void> {
    try {
      console.log(req.user)
      const restaurant = await this.restaurantService.getRestaurantByOwnerId(req?.user?.sub)
      // console.log('***', restaurant)
      if (restaurant === null) {
        throw boom.unauthorized('You are not authorized to update this dish because you are not the owner of the restaurant')
      }

      const dish = await this.dishService.getDishById(Number(req.params.id))
      if (dish === null) {
        throw boom.notFound('Dish not found')
      }

      if (dish.restaurantId !== restaurant.id) {
        throw boom.conflict('You are not authorized to update this dish because dish does not belong to your restaurant')
      }
      const { id } = req.params
      const updatedDish = await this.dishService.toggleActivateDish(Number(id), Boolean(dish.active))
      res.status(200).json(updatedDish)
    } catch (error) {
      next(error)
    }
  }
}
