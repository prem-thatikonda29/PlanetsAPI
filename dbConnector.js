import express from "express";
import mongoose from "mongoose";

const dbConnector = () => {
  mongoose
    .connect("mongodb://localhost:27017/Planets")
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default dbConnector;
