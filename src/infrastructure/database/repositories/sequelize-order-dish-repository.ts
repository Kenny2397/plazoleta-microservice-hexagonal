import { OrderDish } from '../models/order-dish-model'
import { IOrderDishDTO } from '../../../application/dtos/order-dish-dto'
import { OrderDishModel } from '../../../domain/models/iorder-dish-model'
import { IOrderDishRepository } from '../../../domain/repositories/iorder-dish-repository'

export class SequelizeOrderDishRepository implements IOrderDishRepository {
  public async save (payload: OrderDishModel): Promise<OrderDishModel> {
    return await OrderDish.create(payload)
  }

  public async findAll (): Promise<OrderDishModel[]> {
    return await OrderDish.findAll()
  }

  public async findById (id: number): Promise<OrderDishModel | null> {
    return await OrderDish.findByPk(id)
  }

  public async update (id: number, payload: IOrderDishDTO): Promise<any> {
    return await OrderDish.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await OrderDish.destroy({ where: { id } })
  }
}
