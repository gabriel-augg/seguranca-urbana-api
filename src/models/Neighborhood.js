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
    crimaRate: {
        type: DataTypes.FLOAT(3,1),
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
        type: DataTypes.NUMBER,
        allowNull: false
    }
})

export default Neighborhood;

// export default class Bairro {
//     constructor(nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep){
//         this.nomeBairro = nomeBairro
//         this.taxaCriminalidade = taxaCriminalidade
//         this.iluminacaoPublica = iluminacaoPublica
//         this.presencaPolicial = presencaPolicial
//         this.recomendacoesSeguranca = recomendacoesSeguranca
//         this.cep = cep
//     }
// }
