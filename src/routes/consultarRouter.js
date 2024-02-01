import { Router } from "express"
import { retornarDados, retornarIluminacaoPublica, retornarPresencaPolicial, retornarRecomendacoes, retornarTaxaCriminalidade } from "../controllers/consultarController.js"
import { validarSeExiste } from "../controllers/dbController.js"

const consultarRouter = Router()

consultarRouter.get('/cep/:cep', (req, res) => {
    const cep = req.params.cep
    if(validarSeExiste(cep)){
        const bairro = retornarDados(cep)
        res.json(bairro)
        return
    }
    res.status(404).json({ error: 'Bairro não encontrado' })
})

consultarRouter.get('/taxa-criminalidade/cep/:cep', (req, res) => {
    const cep = req.params.cep
    if(validarSeExiste(cep)){
        const bairro = retornarTaxaCriminalidade(cep)
        res.json(bairro)
    }
    res.status(404).json({ error: 'Bairro não encontrado' })
})

consultarRouter.get('/iluminacao-publica/cep/:cep', (req, res) => {
    const cep = req.params.cep
    if(validarSeExiste(cep)){
        const bairro = retornarIluminacaoPublica(cep)
        res.json(bairro)
    }
    res.status(404).json({ error: 'Bairro não encontrado' })
})

consultarRouter.get('/presenca-policial/cep/:cep', (req, res) => {
    const cep = req.params.cep
    if(validarSeExiste(cep)){
        const bairro = retornarPresencaPolicial(cep)
        res.json(bairro)
    }
    res.status(404).json({ error: 'Bairro não encontrado' })
})

consultarRouter.get('/recomendacoes/cep/:cep', (req, res) => {
    const cep = req.params.cep
    if(validarSeExiste(cep)){
        const bairro = retornarRecomendacoes(cep)
        res.json(bairro)
    }
    res.status(404).json({ error: 'Bairro não encontrado' })
})


export { consultarRouter }


