import express from "express";
import { bairroRouter } from "./routes/bairroRoutes.js";

const app = express()
const porta = 3000

app.use(express.json())

app.use('/', bairroRouter)

app.use((req, res, next) => {
    res.status(400).json({ error: '400 HTTP, verifique o caminho'})
})

app.listen(porta, () => {
    console.log(`App rodando na porta ${porta}!`)
})