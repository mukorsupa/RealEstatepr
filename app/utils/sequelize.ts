import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database_development', 'root', 'qwerty', {
    host:'localhost',
    dialect:'mysql',
});

export default sequelize;