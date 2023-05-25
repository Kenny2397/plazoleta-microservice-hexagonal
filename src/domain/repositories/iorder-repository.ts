import { OrderModel } from '../models/iorder-model'

export interface IOrderRepository {
  findById: (id: number) => Promise<OrderModel | null>
  save: (orderData: any) => Promise<OrderModel>
  update: (id: number, orderData: any) => Promise<any>
  delete: (id: number) => Promise<void>
  findAll: () => Promise<OrderModel[]>
}
