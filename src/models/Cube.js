const mongoose = require("mongoose");

const cubeSchema = {
  name: String,
  description: String,
  imageUrl: String,
  difficultyLevel: Number,
};

const Cube = mongoose.model("Cube", cubeSchema);

module.exports = Cube;
