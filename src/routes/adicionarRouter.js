import { Router } from "express";
import { criarBairro } from "../controllers/adicionarController.js";
import { validar } from "../controllers/dbController.js";

const adicionarRouter = Router()

adicionarRouter.post('/', (req, res) => {
    const { bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep } = req.body
    if(!validar(cep)){
        const dado = criarBairro(bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep)
        res.json(dado)
        return
    }
    res.status(400).json({ error: 'O bairro não pode ser adicionar, pois já existe' })
})

export { adicionarRouter }