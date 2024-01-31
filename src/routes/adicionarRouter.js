import { Router } from "express";
import { adicionarBairro } from "../controllers/adicionarController.js";
import { validar } from "../controllers/dbController.js";

const adicionarRouter = Router()

adicionarRouter.post('/', (req, res) => {
    const { bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep } = req.body

    const number = cep.toString()
    
    if(validar(cep)){
        res.status(400).json({ error: 'O bairro não pode ser adicionar, pois já existe' })
        return
    } else if (number.length != 8){
        res.status(400).json({ error: 'O bairro não pode ser adicionar, pois o tamanho do CEP é diferente de 8 caracteres.' })
        return
    }
    const dado = adicionarBairro(bairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep)
    res.json(dado)

})

export { adicionarRouter }