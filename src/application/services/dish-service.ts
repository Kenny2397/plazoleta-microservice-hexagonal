import { IDishRepository } from '../../domain/repositories/idish-repository'
import { DishModel } from '../../domain/models/idish-model'
import { IDishDTO } from '../dtos/dish-dto'
// import { ICategoryRepository } from '../../domain/repositories/icategory-repository'

export class DishService {
  private readonly dishRepository: IDishRepository
  // private readonly categoryRepository: ICategoryRepository

  constructor (dishRepository: IDishRepository) {
    this.dishRepository = dishRepository
    // this.categoryRepository = categoryRepository
  }

  async createDish (dishDto: IDishDTO): Promise<DishModel> {
    const dish: IDishDTO = {
      ...dishDto,
      active: true,
      restaurantId: 1
    }
    console.log('---*', dish)
    const createdDish = await this.dishRepository.create(dish)
    return createdDish
  }
}
