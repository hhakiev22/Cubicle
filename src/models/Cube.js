const mongoose = require("mongoose");

const cubeSchema = {
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
};

const cube = mongoose.Model("Cube", cubeSchema);
