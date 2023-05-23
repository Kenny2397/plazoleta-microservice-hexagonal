import { ICategoryRepository } from '../../domain/repositories/icategory-repository'
import { CategoryModel } from './../../domain/models/icategory-model'
import { ICategoryDTO } from '../dtos/category-dto'

export class CategoryService {
  private readonly categoryRepository: ICategoryRepository

  constructor (categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository
  }

  async createCategoryService (categoryDto: ICategoryDTO): Promise<CategoryModel> {
    console.log('service')
    const createdCategory = await this.categoryRepository.save(categoryDto)
    return createdCategory
  }

  async getCategoryById (id: number): Promise<CategoryModel | null> {
    const category = await this.categoryRepository.findById(id)
    return category
  }
}
