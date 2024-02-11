const Accessory = require("../models/Accessories");

exports.getAll = () => Accessory.find(); // get all data from db for accessories

exports.create = (accessoryData) => Accessory.create(accessoryData);
