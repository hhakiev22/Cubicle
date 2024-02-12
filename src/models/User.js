const mongoose = require("mongoose");

const userSchema = {
  username: String,
  password: String,
};

userSchema.virtual("repeatPassword").set(function (value) {
  if (value !== this.password) {
    throw new mongoose.MongooseError("Passwords missmatch!");
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
