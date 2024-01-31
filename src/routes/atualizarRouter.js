import { Router } from "express";
import { atualizarBairro } from "../controllers/atualizarController.js";
import { validar } from "../controllers/dbController.js";

const atualizarRouter = Router()

atualizarRouter.put('/', (req, res) => {
    const { bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep } = req.body


    if(validar(cep)){
        const bairroAtualizado = atualizarBairro({bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep})
        return res.json(bairroAtualizado)
    }
    res.status(404).json({ error: 'Bairro não encontrado' })
})

export { atualizarRouter }