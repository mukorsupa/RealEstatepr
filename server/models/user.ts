import sequelize from "@/app/utils/sequelize";
import { DataTypes, InferAttributes, InferCreationAttributes, Model } from "sequelize";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  }
  
  const UserModel = sequelize.define<UserModel>('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
  
  export async function doStuff() {
    const instance = await UserModel.findByPk(1, {
      rejectOnEmpty: true,
    });
  }