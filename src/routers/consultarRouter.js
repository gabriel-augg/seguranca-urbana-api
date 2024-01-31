import { Router } from "express"
import { retornarDados, retornarIluminacaoPublica, retornarPresencaPolicial, retornarRecomendacoes, retornarTaxaCriminalidade } from "../controllers/consultarController.js"

const consultarRouter = Router()

consultarRouter.get('/cep/:cep', (req, res) => {
    const cep = req.params.cep
    const dados = retornarDados(cep)
    res.json(dados)
})

consultarRouter.get('/taxa-criminalidade/cep/:cep', (req, res) => {
    const cep = req.params.cep
    const dados = retornarTaxaCriminalidade(cep)
    res.json(dados)
})

consultarRouter.get('/iluminacao-publica/cep/:cep', (req, res) => {
    const cep = req.params.cep
    const dados = retornarIluminacaoPublica(cep)
    res.json(dados)
})

consultarRouter.get('/presenca-policial/cep/:cep', (req, res) => {
    const cep = req.params.cep
    const dados = retornarPresencaPolicial(cep)
    res.json(dados)
})

consultarRouter.get('/recomendacoes/cep/:cep', (req, res) => {
    const cep = req.params.cep
    const dados = retornarRecomendacoes(cep)
    res.json(dados)
})


export { consultarRouter }


