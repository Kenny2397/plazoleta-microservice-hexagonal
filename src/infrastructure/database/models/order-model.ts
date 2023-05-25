import { Model, DataTypes, Optional } from 'sequelize'
import { OrderEntity } from '../../entities/order-entity'

export const ORDER_TABLE = 'orders'

export const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  status: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'pendiente'
  },
  restaurantId: {
    field: 'restaurant_id',
    allowNull: false,
    type: DataTypes.INTEGER
  },
  chefId: {
    field: 'chef_id',
    type: DataTypes.INTEGER
  },
  clientId: {
    field: 'client_id',
    type: DataTypes.INTEGER
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}

type OrderCreationAttributes = Optional<OrderEntity, 'id'>

// export class Order extends Model<InferAttributes<Order>, InferCreationAttributes<Order>> {
export class Order extends Model<OrderEntity, OrderCreationAttributes> {
  declare id: number
  declare status: string
  declare restaurantId: number
  declare chefId: number
  declare clientId: number
  declare createdAt: Date

  static associate (models: any): any {
    this.belongsToMany(models.Dish, {
      as: 'items',
      through: 'OrderDish',
      foreignKey: 'orderId',
      otherKey: 'dishId'
    })

    this.hasOne(models.Restaurant, {
      foreignKey: {
        name: 'restaurantId',
        field: 'restaurant_id'
      }
    })

    // this.hasOne(models.RestaurantEmployee, {
    //   foreignKey: {
    //     name: 'chefId',
    //     field: 'chef_id'
    //   }
    // })
  }

  static config (sequelize: any): any {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}
