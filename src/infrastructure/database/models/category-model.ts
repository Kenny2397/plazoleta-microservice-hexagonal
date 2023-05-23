import { Model, DataTypes, Optional } from 'sequelize'
import { CategoryEntity } from '../../entities/category-entity'

export const CATEGORY_TABLE = 'categories'

export const CategorySchema = {
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
    type: DataTypes.STRING
  },
  createdAt: {
    field: 'created_at',
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}

type CategoryCreationAttributes = Optional<CategoryEntity, 'id'>

// export class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
export class Category extends Model<CategoryEntity, CategoryCreationAttributes> {
  declare id: number
  declare name: string
  declare description: string
  declare createdAt: Date

  static associate (models: any): any {
    this.hasMany(models.Dish, {
      as: 'dishes',
      foreignKey: {
        name: 'categoryId',
        field: 'category_id'
      }
    })
  }

  static config (sequelize: any): any {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false
    }
  }
}
