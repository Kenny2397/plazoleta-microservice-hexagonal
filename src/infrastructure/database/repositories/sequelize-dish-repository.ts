import Dish from '../models/dish-model'
import { IDishDTO } from '../../../application/dtos/dish-dto'
import { Dish as DishDomain } from '../../../domain/models/dish'
import { DishRepository } from '../../../domain/repositories/dish-repository'

class SequelizeDishRepository implements DishRepository {
  public async create (payload: DishDomain): Promise<DishDomain> {
    return await Dish.create(payload)
  }

  public async findAll (): Promise<DishDomain[]> {
    return await Dish.findAll()
  }

  public async findById (id: number): Promise<DishDomain | null> {
    return await Dish.findByPk(id)
  }

  public async update (id: number, payload: IDishDTO): Promise<any> {
    return await Dish.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await Dish.destroy({ where: { id } })
  }
}

export default SequelizeDishRepository
