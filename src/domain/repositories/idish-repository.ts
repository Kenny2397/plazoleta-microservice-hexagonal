import { DishModel } from '../models/idish-model'

export interface IDishRepository {
  findById: (id: number) => Promise<DishModel | null>
  create: (dishData: DishModel) => Promise<DishModel>
  update: (id: number, dishData: any) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: (options: any) => Promise<DishModel[]>
}
