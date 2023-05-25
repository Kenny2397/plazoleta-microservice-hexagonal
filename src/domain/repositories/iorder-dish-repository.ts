import { OrderDishModel } from '../models/iorder-dish-model'

export interface IOrderDishRepository {
  findById: (id: number) => Promise<OrderDishModel | null>
  save: (orderDishData: OrderDishModel) => Promise<OrderDishModel>
  update: (id: number, orderDishData: OrderDishModel) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<OrderDishModel[]>
}
