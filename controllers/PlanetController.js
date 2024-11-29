import mongoose from "mongoose";
import planetModel from "../models/PlanetModel.js";

export async function getPlanets(req, res) {
  try {
    const planets = await planetModel.find();
    if (planets.length === 0) {
      return res.status(404).send({ message: "No planets found" });
    }
    res.status(200).send(planets);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export async function postPlanet(req, res) {
  try {
    const planet = req.body;
    let newPlanet = await planetModel.create(planet);

    if (!newPlanet) {
      return res.status(400).send({ message: "Error creating planet" });
    }
    res.status(201).send("New planet created successfully");
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
}

export async function getPlanetById(req, res) {
  try {
    const planet = await planetModel.findById(req.params.id);
    if (!planet) {
      res.status(404).send({ message: "Planet not found" });
    }
    res.status(200).send(planet);
  } catch (error) {
    res.status(500).send({ message: "Error fetching planet" });
  }
}

export async function getPlanetByName(req, res) {
  try {
    const planet = await planetModel.findOne({ name: req.params.name });
    if (!planet) {
      res.status(404).send({ message: "Planet not found" });
    }
    res.status(200).send(planet);
  } catch (error) {
    res.status(500).send({ message: "Error fetching planet" });
  }
}

export async function updatePlanet(req, res) {
  try {
    let body = req.body;
    const planet = await planetModel.findOne({ name: req.params.name });
    if (!planet) {
      return res.status(404).send({ message: "Planet not found" });
    }

    await planetModel.updateOne({ name: req.params.name }, { $set: body });
    res.status(200).send({ message: "Planet updated successfully" });
  } catch (err) {
    res.status(500).send({ message: "Error updating planet" });
  }
}

export async function deletePlanet(req, res) {
  try {
    const planet = await planetModel.findOne({ name: req.params.name });

    if (!planet) {
      return res.status(404).send({ message: "Planet not found" });
    }

    await planetModel.deleteOne({ name: req.params.name });
    res.status(200).send({ message: "Planet deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting planet" });
  }
}
