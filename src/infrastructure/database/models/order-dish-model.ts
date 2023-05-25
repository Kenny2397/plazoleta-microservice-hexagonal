import { Model, DataTypes, Optional } from 'sequelize'
import { OrderDishEntity } from '../../entities/order-dish-entity'
import { ORDER_TABLE } from './order-model'
import { DISH_TABLE } from './dish-model'
export const ORDER_DISH_TABLE = 'orders_dishes'

export const OrderDishSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  amount: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  orderId: {
    field: 'order_id',
    type: DataTypes.INTEGER,
    references: {
      model: ORDER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  dishId: {
    field: 'dish_id',
    type: DataTypes.INTEGER,
    references: {
      model: DISH_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

type OrderDishCreationAttributes = Optional<OrderDishEntity, 'id'>

// export class OrderDish extends Model<InferAttributes<OrderDish>, InferCreationAttributes<OrderDish>> {
export class OrderDish extends Model<OrderDishEntity, OrderDishCreationAttributes> {
  declare id: number
  declare amount: number
  declare orderId: number
  declare dishId: number
  declare createdAt: Date

  static associate (_models: any): any {
  }

  static config (sequelize: any): any {
    return {
      sequelize,
      tableName: ORDER_DISH_TABLE,
      modelName: 'OrderDish',
      timestamps: false
    }
  }
}
