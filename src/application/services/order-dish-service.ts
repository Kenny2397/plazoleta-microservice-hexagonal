import { IOrderDishDTO } from '../dtos/order-dish-dto'
import { IOrderDishRepository } from '../../domain/repositories/iorder-dish-repository'
import { OrderDishModel } from '../../domain/models/iorder-dish-model'

export class OrderDishService {
  private readonly orderDishRepository: IOrderDishRepository

  constructor (orderdishRepository: IOrderDishRepository) {
    this.orderDishRepository = orderdishRepository
  }

  async createOrderDishService (orderdishDto: IOrderDishDTO): Promise<OrderDishModel> {
    console.log('service')
    const createdOrderDish = await this.orderDishRepository.save(orderdishDto)
    return createdOrderDish
  }

  async getOrderDishById (id: number): Promise<OrderDishModel | null> {
    const orderdish = await this.orderDishRepository.findById(id)
    return orderdish
  }
}
