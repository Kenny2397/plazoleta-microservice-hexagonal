import { Category, CategorySchema } from './models/category-model'
import { Dish, DishSchema } from './models/dish-model'
import { Restaurant, RestaurantSchema } from './models/restaurant-model'

export function setupModels (sequelize: any): void {
  Restaurant.init(RestaurantSchema, Restaurant.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Dish.init(DishSchema, Dish.config(sequelize))

  // Restaurant.associate(sequelize.models)
  // Category.associate(sequelize.models)
}
