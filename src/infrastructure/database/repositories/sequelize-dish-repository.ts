import { Dish } from '../models/dish-model'
import { IUpdateDishDTO } from '../../../application/dtos/dish-dto'
import { DishModel } from '../../../domain/models/idish-model'
import { IDishRepository } from '../../../domain/repositories/idish-repository'

export class SequelizeDishRepository implements IDishRepository {
  public async create (payload: DishModel): Promise<DishModel> {
    return await Dish.create(payload)
  }

  public async findAll (options: any): Promise<DishModel[]> {
    return await Dish.findAll(options)
  }

  public async findById (id: number): Promise<DishModel | null> {
    return await Dish.findByPk(id)
  }

  public async update (id: number, payload: IUpdateDishDTO): Promise<any> {
    return await Dish.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await Dish.destroy({ where: { id } })
  }
}
