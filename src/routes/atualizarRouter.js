import { Router } from "express";
import { atualizarBairro } from "../controllers/atualizarController.js";
import { validarSeExiste } from "../controllers/dbController.js";

const atualizarRouter = Router()

atualizarRouter.put('/', (req, res) => {

    const { nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep } = req.body

    if(validarSeExiste(cep)){
        const bairroAtualizado = atualizarBairro({nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep})
        res.json(bairroAtualizado)
        return 
    }
    res.status(404).json({ error: 'Bairro não encontrado' })
})

export { atualizarRouter }