import mongoose from "mongoose";

const WeatherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  temperatures: {
    global_avg: Number,
    min: Number,
    max: Number,
  },
  atmosphere: {
    composition: {
      type: Map,
      of: Number,
    },
    pressure: String,
  },
  climateZones: [{ type: String }],
});

const WeatherModel = new mongoose.model("weathers", WeatherSchema);
export default WeatherModel;
