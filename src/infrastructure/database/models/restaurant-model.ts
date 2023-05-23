import { Model, DataTypes, Optional } from 'sequelize'
import { RestaurantEntity } from '../../entities/restaurant-entity'

export const RESTAURANT_TABLE = 'restaurants'

export const RestaurantSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      is: /^(\+)?\d{1,13}$/
    }
  },
  urlLogo: {
    field: 'url_logo',
    allowNull: false,
    type: DataTypes.STRING
  },
  nit: {
    allowNull: false,
    unique: true,
    type: DataTypes.INTEGER
  },
  ownerId: {
    field: 'owner_id',
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  }
}

type RestaurantCreationAttributes = Optional<RestaurantEntity, 'id'>

// export class Restaurant extends Model<InferAttributes<Restaurant>, InferCreationAttributes<Restaurant>> {
export class Restaurant extends Model<RestaurantEntity, RestaurantCreationAttributes> {
  declare id: number
  declare name: string
  declare address: string
  declare phone: string
  declare urlLogo: string
  declare nit: number
  declare ownerId: number
  declare createdAt: Date

  static associate (models: any): void {
    // this.belongsToMany(models.Category, {
    //   through: 'Dish'
    // })

    this.hasMany(models.Dish, {
      as: 'dishes',
      foreignKey: {
        name: 'restaurantId',
        field: 'restaurant_id'
      }
    })

    // this.belongsTo(models.Order)
  }

  static config (sequelize: any): any {
    return {
      sequelize,
      tableName: RESTAURANT_TABLE,
      modelName: 'Restaurant',
      timestamps: false
    }
  }
}
