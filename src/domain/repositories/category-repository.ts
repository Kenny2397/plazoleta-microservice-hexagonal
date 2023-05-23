import { Category } from '../models/category'

export interface CategoryRepository {
  findById: (id: number) => Promise<Category | null>
  create: (categoryData: Category) => Promise<Category>
  update: (id: number, categoryData: Category) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<Category[]>
}
