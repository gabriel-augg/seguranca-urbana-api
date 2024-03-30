import express from "express";
import cors from "cors"
import { connectToDatabase } from "./db/conn.js";
import { neighborhoodRouter } from "./routes/neighborhoodRoutes.js";

const app = express()
const port = process.env.PORT || 3000

app.use(cors({ credentials: true, origin: "http://localhost:5173"}))

app.use(express.json())

app.use('/neighborhoods', neighborhoodRouter)

app.use((req, res, next) => {
    res.status(400).json({ error: '400 HTTP, verifique o caminho'})
})

connectToDatabase()
.then(()=> {
    app.listen(port)
})