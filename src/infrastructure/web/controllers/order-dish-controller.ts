import { NextFunction, Request, Response } from 'express'
import { OrderDishService } from '../../../application/services/order-dish-service'
import { IOrderDishDTO } from '../../../application/dtos/order-dish-dto'

export class OrderDishController {
  private readonly orderDishService: OrderDishService

  constructor (orderDishService: OrderDishService) {
    this.orderDishService = orderDishService
  }

  async createOrderDish (req: Request, res: Response, next: NextFunction): Promise<void> {
    console.log('controller')
    try {
      const orderDish: IOrderDishDTO = req.body
      const newOrderDish = await this.orderDishService.createOrderDishService(orderDish)
      res.status(201).json(newOrderDish)
    } catch (error) {
      next(error)
    }
  }
}
