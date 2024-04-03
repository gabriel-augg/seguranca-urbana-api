import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, 
        {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            dialect: "mysql"
        }
    )

async function connectToDatabase(){
    try {
        await sequelize.authenticate()
        console.log("Successfully connected")
        await sequelize.sync({force: true})
        console.log("Sucessfully synconized")
    } catch (error) {
        console.log(error)
    }
}

export { connectToDatabase, sequelize }