import { CategoryModel } from '../models/icategory-model'

export interface ICategoryRepository {
  findById: (id: number) => Promise<CategoryModel | null>
  save: (categoryData: CategoryModel) => Promise<CategoryModel>
  update: (id: number, categoryData: CategoryModel) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<CategoryModel[]>
}
