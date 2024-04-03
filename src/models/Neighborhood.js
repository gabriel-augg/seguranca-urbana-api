import { sequelize as db } from "../db/conn.js"
import { Sequelize, DataTypes } from "sequelize"

const Neighborhood = db.define("Neighborhood", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    crimeRate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    publicLight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    policePresence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recommendation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Neighborhood;
