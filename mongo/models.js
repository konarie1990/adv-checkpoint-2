const mongoose = require("mongoose");
const { Cats } = require("./schemas");

const CatsModel = mongoose.model("Cat", Cats);

module.exports = {
  CatsModel
};
