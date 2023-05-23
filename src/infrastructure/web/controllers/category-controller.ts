import { NextFunction, Request, Response } from 'express'
import { CategoryService } from '../../../application/services/category-service'
import { ICategoryDTO } from '../../../application/dtos/category-dto'

export class CategoryController {
  private readonly categoryService: CategoryService

  constructor (categoryService: CategoryService) {
    this.categoryService = categoryService
  }

  async createCategory (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('controller')
    try {
      const category: ICategoryDTO = {
        name: req.body.name,
        description: req.body.description
      }

      const newCategory = await this.categoryService.createCategoryService(category)
      res.status(201).json(newCategory)
    } catch (error) {
      next(error)
    }
  }
}
