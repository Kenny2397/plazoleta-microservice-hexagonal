import { DishModel } from '../models/idish-model'

export interface IDishRepository {
  findById: (id: number) => Promise<DishModel | null>
  create: (dishData: DishModel) => Promise<DishModel>
  update: (id: number, dishData: DishModel) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<DishModel[]>
}
