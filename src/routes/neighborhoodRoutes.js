import { Router } from "express";
import NeighborhoodController from "../controllers/NeighborhoodController.js";

const neighborhoodRouter = Router()

neighborhoodRouter.post("/create", NeighborhoodController.create)
neighborhoodRouter.get("/", NeighborhoodController.getAll)
neighborhoodRouter.get("/cep/:cep", NeighborhoodController.getByCep)
neighborhoodRouter.get("/crimerate/cep/:cep", NeighborhoodController.getCrimeRate)


export { neighborhoodRouter }