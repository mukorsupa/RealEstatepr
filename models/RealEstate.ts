import { Model, DataType, DataTypes, IntegerDataType } from "sequelize";
import bcrypt from 'bcryptjs';
import sequelize from '../app/utils/sequelize';


class RealEstate extends Model{


    public property_id!: number;
    public property_type!: string;
    public address!: string;
    public price!: number;
    public description!: string;
    public city!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


RealEstate.init(
    {
    property_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false,
    },
    property_type: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    address: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    price: {
        type: DataTypes.INTEGER,
        allowNull:false,
        

    },
    description: {
        type: DataTypes.STRING,
        allowNull:false,
        

    },
    city: {
        type: DataTypes.STRING,
        allowNull:true,
    },
},
{
    sequelize,
    tableName:'RealEstate',
    timestamps: false,
}
);

export default RealEstate;
