import express from "express";
import {
  deletePlanet,
  getPlanetById,
  getPlanetByName,
  getPlanets,
  postPlanet,
  updatePlanet,
} from "../controllers/PlanetController.js";

const planetRouter = express.Router();

planetRouter.get("/", getPlanets);

planetRouter.post("/", postPlanet);

planetRouter.get("/:id", getPlanetById);

planetRouter.get("/name/:name", getPlanetByName);
planetRouter.put("/name/:name", updatePlanet);
planetRouter.delete("/name/:name", deletePlanet);

export default planetRouter;
