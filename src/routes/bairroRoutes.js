import { Router } from "express";
import bairroController from "../controllers/bairroController.js";

const bairroRouter = Router()

bairroRouter.get('/consultar/cep/:cep', bairroController.consultar)
bairroRouter.get('/consultar/taxa-criminalidade/cep/:cep', bairroController.consultarTaxa)
bairroRouter.get('/consultar/iluminacao-publica/cep/:cep', bairroController.consultarIluminacao)
bairroRouter.get('/consultar/presenca-policial/cep/:cep', bairroController.consultarPresencaPolicial)
bairroRouter.get('/consultar/recomendacoes/cep/:cep', bairroController.consultarRecomendacoes)
bairroRouter.post('/adicionar', bairroController.adicionar)
bairroRouter.put('/atualizar', bairroController.atualizar)
bairroRouter.delete('/deletar/cep/:cep', bairroController.deletar)

export { bairroRouter }