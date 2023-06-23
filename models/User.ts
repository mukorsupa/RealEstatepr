import { Model, DataType, DataTypes, InferAttributes, InferCreationAttributes, BelongsToMany } from "sequelize";
import bcrypt from 'bcryptjs';
import sequelize from '../app/utils/sequelize';
import Company from "./Company";

 class User extends Model{

    static findByUserId(user_id: number) {
        return User.findByPk(user_id);
      }

    public user_id!: number;
    public first_name!: string;
    public last_name!: string;
    public email!: string;
    public password!: string;
    public phone_number!: string;
    public registration_date!: Date;
    public role!: string;
    public city!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


User.init(
    {
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    last_name: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        

    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        

    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    registration_date: {
        type: DataTypes.DATE,
        allowNull:true,
        

    },

    role: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
    city: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },
},

{
    sequelize,
    tableName:'User',
    timestamps: false,
}

);

User.hasMany(Company)

// User.addHook('beforeCreate',async (user:User) => {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
    
// });
export default User;

