import { DataTypes, Model, Optional } from "sequelize"
import { ProductDto } from "../dto/product.dto";
import { ProductCreateDto } from "../dto/product.create.dto";
import { initModel } from "../../utils/initModel";



export class Product extends Model<ProductDto, Optional<ProductCreateDto, 'id'>> implements ProductDto {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
  public created_at!: Date;
  public updated_at!: Date;
  public deleted_at!: Date;
}

initModel(Product, {
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, 'products')
