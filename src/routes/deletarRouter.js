import { Router } from "express";
import { validar } from "../controllers/dbController.js";
import { deletarBairro } from "../controllers/deletarController.js";

const deletarRouter = Router()

deletarRouter.delete('/:cep', (req, res) => {
    const cep = parseInt(req.params.cep)
    if(validar(cep)){
        deletarBairro(cep)
        res.status(204).send()
        return 
    }
    res.status(404).json({ error: 'Bairro não encontrado' })

})

export { deletarRouter }