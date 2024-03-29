import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql"
})


async function connectedToDatabase(){
    try {
        await sequelize.authenticate()
        console.log("Successfuly connected to the database")
        await sequelize.sync()
        console.log("Database synchronized successfully")
    } catch (error) {
        console.log(error)
    }
}

    
export {connectedToDatabase, sequelize};


