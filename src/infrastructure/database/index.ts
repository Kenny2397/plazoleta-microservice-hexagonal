import { Category, CategorySchema } from './models/category-model'
import { Dish, DishSchema } from './models/dish-model'
import { Restaurant, RestaurantSchema } from './models/restaurant-model'
import { Order, OrderSchema } from './models/order-model'
import { OrderDish, OrderDishSchema } from './models/order-dish-model'

export function setupModels (sequelize: any): void {
  Restaurant.init(RestaurantSchema, Restaurant.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
  Dish.init(DishSchema, Dish.config(sequelize))
  Order.init(OrderSchema, Order.config(sequelize))
  OrderDish.init(OrderDishSchema, OrderDish.config(sequelize))

  Restaurant.associate(sequelize.models)
  Category.associate(sequelize.models)
  Dish.associate(sequelize.models)
  Order.associate(sequelize.models)
  OrderDish.associate(sequelize.models)
}
