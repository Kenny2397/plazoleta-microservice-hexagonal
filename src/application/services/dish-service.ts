import { IDishRepository } from '../../domain/repositories/idish-repository'
import { DishModel } from '../../domain/models/idish-model'
import { IDishDTO, IUpdateDishDTO } from '../dtos/dish-dto'
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

  async updateDish (id: number, dishDto: IUpdateDishDTO): Promise<DishModel | null> {
    const dish: IUpdateDishDTO = {
      ...dishDto
    }
    const updatedDish = await this.dishRepository.update(id, dish)
    console.log(updatedDish)
    const dishUpdated = await this.dishRepository.findById(id)
    return dishUpdated
  }

  async getDishById (id: number): Promise<DishModel | null> {
    const dish = await this.dishRepository.findById(id)
    return dish
  }

  async toggleActivateDish (id: number, active: boolean): Promise<DishModel | null> {
    const updateDish = await this.dishRepository.update(id, { active: !active })
    console.log(updateDish)
    const dishUpdated = await this.dishRepository.findById(id)
    return dishUpdated
  }
}
