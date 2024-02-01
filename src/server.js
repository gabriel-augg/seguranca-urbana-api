import express from "express";
import { consultarRouter } from "./routes/consultarRouter.js";
import { adicionarRouter } from "./routes/adicionarRouter.js";
import { deletarRouter } from "./routes/deletarRouter.js";
import { atualizarRouter } from "./routes/atualizarRouter.js";

const app = express()
const porta = 3000

app.use(express.json())

app.use('/consultar', consultarRouter)

app.use('/adicionar', adicionarRouter)

app.use('/deletar', deletarRouter)

app.use ('/atualizar', atualizarRouter)

app.get('/', (req, res) => {
    res.send('Funcionando!')
})

app.use((req, res, next) => {
    res.status(400).send('400 HTTP, verifique o caminho')
})

app.listen(porta, () => {
    console.log(`App rodando na porta ${porta}!`)
})