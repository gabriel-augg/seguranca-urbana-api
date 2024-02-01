import { Router } from "express";
import { validarSeExiste } from "../controllers/dbController.js";
import { deletarBairro } from "../controllers/deletarController.js";

const deletarRouter = Router()

deletarRouter.delete('/cep/:cep', (req, res) => {
    const cep = req.params.cep
    if(validarSeExiste(cep)){
        deletarBairro(cep)
        res.status(204).send()
        return 
    }
    res.status(404).json({ error: 'Bairro não encontrado' })

})

export { deletarRouter }