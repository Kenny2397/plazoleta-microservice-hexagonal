import { DishRepository } from '../../domain/repositories/dish-repository'
import { Dish } from '../../domain/models/dish'
import { IDishDTO } from '../dtos/dish-dto'

class DishService {
  private readonly dishRepository: DishRepository

  constructor (dishRepository: DishRepository) {
    this.dishRepository = dishRepository
  }

  async createDish (dishDto: IDishDTO): Promise<Dish> {
    const dish: Dish = {
      ...dishDto,
      active: true,
      restaurantId: 1
    }
    console.log('---*', dish)
    const createdDish = await this.dishRepository.create(dish)
    return createdDish
  }
}

export default DishService
