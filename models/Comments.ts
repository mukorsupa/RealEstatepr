import { Model, DataType, DataTypes } from "sequelize";
import bcrypt from 'bcryptjs';
import sequelize from '../app/utils/sequelize';


class Comment extends Model{

    public comment_id!: number;
    public company_id!: number;
    public user_id!: number;
    public review!: string;    

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}


Comment.init(
    {
    comment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:true,
    },
    company_id: {
        type: DataTypes.INTEGER,
        allowNull:true,
        

    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:true,
        

    },
    review: {
        type: DataTypes.STRING,
        allowNull:true,
        

    },

},
{
    sequelize,
    tableName:'Comments',
    timestamps: false,
}
);

// User.addHook('beforeCreate',async (user:User) => {
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
    
// });
export default Comment;
