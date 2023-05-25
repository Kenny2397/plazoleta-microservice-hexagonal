import { NextFunction, Request, Response } from 'express'
import { OrderService } from '../../../application/services/order-service'
import { IOrderCreateDTO } from '../../../application/dtos/order-dto'

export class OrderController {
  private readonly orderService: OrderService

  constructor (orderService: OrderService) {
    this.orderService = orderService
  }

  async createOrder (req: Request | any, res: Response, next: NextFunction): Promise<void> {
    console.log('controller')
    try {
      const order: IOrderCreateDTO = req.body
      const clientId = req?.user?.sub
      const newOrder = await this.orderService.createOrderService(order, clientId)
      console.log(newOrder)
      res.status(201).json(newOrder)
    } catch (error) {
      next(error)
    }
  }
}
