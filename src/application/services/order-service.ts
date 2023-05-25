import boom from '@hapi/boom'
import { IOrderRepository } from '../../domain/repositories/iorder-repository'
import { OrderModel } from './../../domain/models/iorder-model'
import { IOrderCreateDTO } from '../dtos/order-dto'
import { IRestaurantRepository } from '../../domain/repositories/irestaurant-repository'
import { IOrderDishRepository } from '../../domain/repositories/iorder-dish-repository'
import { IOrderDishDTO } from '../dtos/order-dish-dto'

export class OrderService {
  private readonly orderRepository: IOrderRepository
  private readonly restaurantRepository: IRestaurantRepository
  private readonly orderDishRepository: IOrderDishRepository

  constructor (orderRepository: IOrderRepository, restaurantRepository: IRestaurantRepository, orderDishRepository: IOrderDishRepository) {
    this.orderRepository = orderRepository
    this.restaurantRepository = restaurantRepository
    this.orderDishRepository = orderDishRepository
  }

  async createOrderService (orderCreateDto: IOrderCreateDTO, clientId: number): Promise<any> {
    console.log('service')
    const { dishes } = orderCreateDto
    const restaurantId: number = orderCreateDto.restaurantId
    console.log(typeof restaurantId)
    const restaurantUpdate = await this.restaurantRepository.findById(restaurantId)
    console.log('restaurant', restaurantUpdate)
    if (restaurantUpdate === null) {
      throw boom.notFound('Restaurant not found')
    }

    // verificar que platos existan
    const orderCreate: any = {
      status: 'pending',
      restaurantId,
      clientId
    }
    const createdOrder = await this.orderRepository.save(orderCreate)
    console.log('order', createdOrder)

    const response = []
    for (let dish = 0; dish < dishes.length; dish++) {
      const orderDishCreate: IOrderDishDTO = {
        amount: dishes[dish].amount,
        orderId: Number(createdOrder.id),
        dishId: dishes[dish].id
      }
      const createdOrderDish = await this.orderDishRepository.save(orderDishCreate)
      console.log('order-dish', createdOrderDish)
      response.push(createdOrderDish)
    }
    return response
  }

  async getOrderById (id: number): Promise<OrderModel | null> {
    const order = await this.orderRepository.findById(id)
    return order
  }
}
