import { CategoryRepository } from '../../domain/repositories/category-repository'
import { Category } from '../../domain/models/category'
import { ICategoryDTO } from '../dtos/category-dto'

class CategoryService {
  private readonly categoryRepository: CategoryRepository

  constructor (categoryRepository: CategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async createCategory (categoryDto: ICategoryDTO): Promise<Category> {
    const createdCategory = await this.categoryRepository.create(categoryDto)
    return createdCategory
  }
}

export default CategoryService
