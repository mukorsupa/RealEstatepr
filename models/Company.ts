import { Model, DataType, DataTypes, BelongsTo } from "sequelize";
import bcrypt from 'bcryptjs';
import sequelize from '../app/utils/sequelize';


class Company extends Model{

    public company_id!: number;
    public name!: string;
    public address!: string;
    public city!: string;
    public phone_number!: string;
    public email!: string;
    public website!: string;
    public logo!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


Company.init(
    {
    company_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    address: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    city: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    email: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    website: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },

    logo: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
},
{
    sequelize,
    tableName:'Company',
    timestamps: false,
}
);



// User.addHook('beforeCreate',async (user:User) => {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
    
// });
export default Company;
