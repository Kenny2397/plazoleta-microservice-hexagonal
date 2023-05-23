import { Restaurant } from './../models/restaurant-model'
import { RestaurantModel } from '../../../domain/models/irestaurant-model'
import { IRestaurantRepository } from '../../../domain/repositories/irestaurant-repository'

export class SequelizeRestaurantRepository implements IRestaurantRepository {
  public async save (payload: RestaurantModel): Promise<RestaurantModel> {
    return await Restaurant.create(payload)
  }

  public async findAll (): Promise<RestaurantModel[]> {
    return await Restaurant.findAll()
  }

  public async findById (id: number): Promise<RestaurantModel | null> {
    return await Restaurant.findByPk(id)
  }

  public async findByNit (nit: number): Promise<RestaurantModel | null> {
    return await Restaurant.findOne({ where: { nit } })
  }

  public async update (id: number, payload: RestaurantModel): Promise<any> {
    return await Restaurant.update(payload, { where: { id } })
  }

  public async delete (id: number): Promise<void> {
    await Restaurant.destroy({ where: { id } })
  }
}
