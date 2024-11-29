import mongoose from "mongoose";

const planetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: String,
    mass: Number,
    gravity: Number,
    radius: Number,
  },
  { timestamps: true }
);

const planetModel = mongoose.model("planets", planetSchema);
export default planetModel;
