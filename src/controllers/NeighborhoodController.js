import Neighborhood from "../models/Neighborhood.js";

export default class NeighborhoodController {
    static async create(req, res){
        const { name, crimeRate, publicLight, policePresence, recommendation, cep } = req.body

        if( !name || !crimeRate || !publicLight || !policePresence || !recommendation || !cep ){
            console.log("caiu aqui")
            res.status(411).json({message: "error/unexpected-issue"})
            return
        }

        try {
            const verifyCep = await Neighborhood.findOne({where: {cep:cep}})

            if(verifyCep){
                res.status(401).json({message: "error/cep-alreday-in-use"})
                return
            }
    
            const neighborhood = {
                name,
                crimeRate,
                publicLight,
                policePresence,
                recommendation,
                cep
            }

            const createdNeighborhood = await Neighborhood.create(neighborhood)

            res.status(201).json({neighborhood: createdNeighborhood})
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error/server-issue" })
        }


    }
    
    static async getByCep(req, res){
        const {cep} = req.params

        if( !cep ){
            res.status(411).json({message: "error/unexpected-issue"})
            return
        }
        
        try {
            const neighborhood = await Neighborhood.findOne({where: {cep:cep}})
            if(!neighborhood){
                res.status(404).json({message: "error/not-found"})
                return
            }
            res.status(200).json({neighborhood: neighborhood})
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error/server-issue" })
        }
    }

    static async getAll(req, res) {
        try {
            const neighborhoods = await Neighborhood.findAll()
            res.status(200).json({ neighborhoods: neighborhoods })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error/server-issue" })
        }
    }

    static async getCrimeRate(req, res){
        const {cep} = req.params
        console.log(cep)
        if( !cep ){
            res.status(411).json({message: "error/unexpected-issue"})
            return
        }

        try {
            const neighborhood = await Neighborhood.findOne({where: {cep:cep},attributes: ["name", "crimeRate"]})
            if(!neighborhood){
                res.status(404).json({message: "error/not-found"})
                return
            }

            console.log(neighborhood)
            res.status(200).json({neighborhood: neighborhood})
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error/server-issue" })
        }
    }
}
