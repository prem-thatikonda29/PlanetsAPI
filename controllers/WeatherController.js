import WeatherModel from "../models/WeatherModel.js";

export async function getWeather(req, res) {
  try {
    const name = req.params.name;
    const planet = await WeatherModel.findOne({ name: name });

    if (!planet) {
      return res.status(404).send({ message: "Planet not found!" });
    }

    res.status(200).send(planet);
  } catch (error) {
    res.status(500).send({ message: "Error fetching the weather details" });
  }
}

export async function postWeather(req, res) {
  try {
    // const weather = req.body;
    const newWeather = await WeatherModel.create(req.body);

    if (!newWeather) {
      return res.status(400).send({ message: "Error creating planet" });
    }
    res.status(201).send(newWeather);
  } catch (error) {
    res.status(500).send({ message: "Error posting the weather details" });
  }
}
