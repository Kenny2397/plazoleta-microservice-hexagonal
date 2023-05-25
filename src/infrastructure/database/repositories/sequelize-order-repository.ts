import { Order } from '../models/order-model'
import { IOrderDTO } from '../../../application/dtos/order-dto'
import { OrderModel } from '../../../domain/models/iorder-model'
import { IOrderRepository } from '../../../domain/repositories/iorder-repository'

export class SequelizeOrderRepository implements IOrderRepository {
  public async save (payload: OrderModel): Promise<OrderModel> {
    return await Order.create(payload)
  }

  public async findAll (): Promise<OrderModel[]> {
    return await Order.findAll()
  }

  public async findById (id: number): Promise<OrderModel | null> {
    return await Order.findByPk(id)
  }

  public async update (id: number, payload: IOrderDTO): Promise<any> {
    return await Order.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await Order.destroy({ where: { id } })
  }
}
