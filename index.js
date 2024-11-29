import express from "express";
import dbConnector from "./dbConnector.js";
import planetRouter from "./routes/PlanetRouter.js";
import WeatherRouter from "./routes/WeatherRouter.js";

const app = express();

app.use(express.json());

dbConnector();

app.get("/", (req, res) => {
  res.send("Hello from the Planets API");
});

app.use("/planets", planetRouter);
app.use("/weather", WeatherRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
