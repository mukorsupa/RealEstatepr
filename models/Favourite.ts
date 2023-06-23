import { Model, DataType, DataTypes } from "sequelize";
import bcrypt from 'bcryptjs';
import sequelize from '../app/utils/sequelize';


class Favourite extends Model{

    public favourite_id!: number;
    public property_id!: number;
    public user_id!: number;
    public notes!: string;    

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


Favourite.init(
    {
    favourite_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:true,
    },
    property_id: {
        type: DataTypes.INTEGER,
        allowNull:true,
        

    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:true,
        

    },
    notes: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },

},
{
    sequelize,
    tableName:'Favourite',
    timestamps: false,
}
);

// User.addHook('beforeCreate',async (user:User) => {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
    
// });
export default Favourite;
