import Neighborhood from "../models/Neighborhood.js";

export default class NeighborhoodController {
    static async create(){
        const { name, crimaRate, publicLight, policePresence, recommendation, cep } = req.body

        if( !name || !crimaRate || !publicLight || !policePresence || !recommendation || !cep ){
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
                crimaRate,
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
    
    static async getByCep(){
        const {cep} = req.params

        if( !cep ){
            res.status(411).json({message: "error/unexpected-issue"})
            return
        }
        
        try {
            const neighborhood = await Neighborhood.findOne({where: {cep:cep}})
            res.status(200).json({neighborhood: neighborhood})
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error/server-issue" })
        }
    }

    static async getAll() {
        try {
            const neighborhoods = await Neighborhood.findAll()
            res.status(200).json({ neighborhoods: neighborhoods })
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error/server-issue" })
        }
    }

    static async getCrimeRate(){
        const {cep} = req.params
        if( !cep ){
            res.status(411).json({message: "error/unexpected-issue"})
            return
        }

        try {
            const neighborhood = await Neighborhood.findOne({where: {cep:cep}, include: {
                attributes: ['name', 'crimeRate']
            }})
            res.status(200).json({neighborhood: neighborhood})
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "error/server-issue" })
        }
    }
}
