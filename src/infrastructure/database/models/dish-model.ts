import { Model, DataTypes, Optional } from 'sequelize'
import { DishEntity } from '../../entities/dish-entity'
import { RESTAURANT_TABLE } from './restaurant-model'
import { CATEGORY_TABLE } from './category-model'
export const DISH_TABLE = 'dishes'

export const DishSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  urlImage: {
    field: 'url_image',
    allowNull: false,
    type: DataTypes.STRING
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  categoryId: {
    field: 'category_id',
    type: DataTypes.INTEGER,
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  restaurantId: {
    field: 'restaurant_id',
    type: DataTypes.INTEGER,
    references: {
      model: RESTAURANT_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}

type DishCreationAttributes = Optional<DishEntity, 'id'>

// export class Dish extends Model<InferAttributes<Dish>, InferCreationAttributes<Dish>> {
export class Dish extends Model<DishEntity, DishCreationAttributes> {
  declare id: number
  declare name: string
  declare description: string
  declare price: number
  declare urlImage: string
  declare active: boolean
  declare categoryId: number
  declare restaurantId: number
  declare createdAt: Date

  static associate (models: any): void {
    this.belongsTo(models.Category, {
      as: 'category'
    })

    this.belongsTo(models.Restaurant, {
      as: 'restaurant'
    })
  }

  static config (sequelize: any): any {
    return {
      sequelize,
      tableName: DISH_TABLE,
      modelName: 'Dish',
      timestamps: false
    }
  }
}
