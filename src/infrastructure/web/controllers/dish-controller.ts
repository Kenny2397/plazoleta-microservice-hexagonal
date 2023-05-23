import { NextFunction, Request, Response } from 'express'
import DishService from '../../../application/services/dish-service'
import { IDishDTO } from '../../../application/dtos/dish-dto'

class DishController {
  private readonly dishService: DishService

  constructor (dishService: DishService) {
    this.dishService = dishService
  }

  async create (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dish: IDishDTO = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        urlImage: req.body.urlImage,
        categoryId: req.body.categoryId
      }
      console.log('---', dish)
      const newDish = await this.dishService.createDish(dish)
      res.status(201).json(newDish)
    } catch (error) {
      next(error)
    }
  }
}

export default DishController
