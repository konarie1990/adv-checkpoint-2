const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { CatsModel } = require("../../mongo/models");

// 1. create a function called getAll that returns everything
const getAll = () => {
  return CatsModel.find({});
};

// 2. create a function called createMovie that accepts a "movie" param
const createCat = cat => {
  // insert movie from POST request into db
  return CatsModel.create({
    name: cat.name,
    breed: cat.breed,
    age: cat.age
  });
};

// 3. create a function called deleteMovie that accepts a "movieName" param
const deleteCat = id => {
  return CatsModel.deleteOne({ _id: id });
};

// 4. create a function called getById that accepts an "id" param and finds one ticket
// hint: in your db query, you will use objectId like this: ObjectId(id)
const getById = id => {
  return CatsModel.findOne({ _id: ObjectId(id) });
};

module.exports = {
  getAll,
  createCat,
  deleteCat,
  getById
};
