import { Category } from '../models/category-model'
import { ICategoryDTO } from '../../../application/dtos/category-dto'
import { CategoryModel } from '../../../domain/models/icategory-model'
import { ICategoryRepository } from '../../../domain/repositories/icategory-repository'

export class SequelizeCategoryRepository implements ICategoryRepository {
  public async save (payload: CategoryModel): Promise<CategoryModel> {
    return await Category.create(payload)
  }

  public async findAll (): Promise<CategoryModel[]> {
    return await Category.findAll()
  }

  public async findById (id: number): Promise<CategoryModel | null> {
    return await Category.findByPk(id)
  }

  public async update (id: number, payload: ICategoryDTO): Promise<any> {
    return await Category.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await Category.destroy({ where: { id } })
  }
}
