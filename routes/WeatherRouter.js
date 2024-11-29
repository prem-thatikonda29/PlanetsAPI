import express from "express";
import { getWeather, postWeather } from "../controllers/WeatherController.js";

const WeatherRouter = express.Router();

WeatherRouter.get("/:name", getWeather);

WeatherRouter.post("/create", postWeather);

export default WeatherRouter;
