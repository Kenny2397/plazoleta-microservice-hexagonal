import { Dish } from '../models/dish'

export interface DishRepository {
  findById: (id: number) => Promise<Dish | null>
  create: (dishData: Dish) => Promise<Dish>
  update: (id: number, dishData: Dish) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<Dish[]>
}
