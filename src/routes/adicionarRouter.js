import { Router } from "express";
import { adicionarBairro } from "../controllers/adicionarController.js";
import { validarSeExiste } from "../controllers/dbController.js";

const adicionarRouter = Router()

adicionarRouter.post('/', (req, res) => {
    const { nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep } = req.body

    const _cep = cep.toString()
    
    if(validarSeExiste(cep)){
        res.status(400).json({ error: 'O bairro não pode ser adicionar, pois já existe' })
        return
    } else if (_cep.length != 8){
        res.status(400).json({ error: 'O bairro não pode ser adicionar, pois o tamanho do CEP é diferente de 8 caracteres.' })
        return
    }
    const novoBairro = adicionarBairro(nomeBairro, taxaCriminalidade, iluminacaoPublica, presencaPolicial, recomendacoesSeguranca, cep)
    res.json(novoBairro)

})

export { adicionarRouter }