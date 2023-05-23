import { NextFunction, Request, Response } from 'express'
import CategoryService from '../../../application/services/category-service'
import { ICategoryDTO } from '../../../application/dtos/category-dto'

class CategoryController {
  private readonly categoryService: CategoryService

  constructor (categoryService: CategoryService) {
    this.categoryService = categoryService
  }

  async create (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const category: ICategoryDTO = {
        name: req.body.name,
        description: req.body.description
      }

      const newCategory = await this.categoryService.createCategory(category)
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }
}

export default CategoryController
