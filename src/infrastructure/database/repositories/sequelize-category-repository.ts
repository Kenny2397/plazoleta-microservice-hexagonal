import Category from '../models/category-model'
import { ICategoryDTO } from '../../../application/dtos/category-dto'
import { Category as CategoryDomain } from '../../../domain/models/category'
import { CategoryRepository } from '../../../domain/repositories/category-repository'

class SequelizeCategoryRepository implements CategoryRepository {
  public async create (payload: CategoryDomain): Promise<CategoryDomain> {
    return await Category.create(payload)
  }

  public async findAll (): Promise<CategoryDomain[]> {
    return await Category.findAll()
  }

  public async findById (id: number): Promise<CategoryDomain | null> {
    return await Category.findByPk(id)
  }

  public async update (id: number, payload: ICategoryDTO): Promise<any> {
    return await Category.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await Category.destroy({ where: { id } })
  }
}

export default SequelizeCategoryRepository
