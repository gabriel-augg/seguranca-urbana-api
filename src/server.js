import express from "express";
import { consultarRouter } from "./routers/consultarRouter.js";
import { adicionarRouter } from "./routers/adicionarRouter.js";

const app = express()
const port = 3000

app.use(express.json())

app.use('/consultar', consultarRouter)

app.use('/adicionar', adicionarRouter)

app.get('/', (req, res) => {
    res.send('Funcionando!')
})

app.use(function (req, res, next) {
    res.status(400).send('400 HTTP, verifique o caminho')
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}!`)
})