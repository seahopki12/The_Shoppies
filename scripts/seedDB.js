const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Movies collection and inserts the movies below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shoppies");

const movieSeed = [
  {
    title: "Sean's Movie",
    year: "1993"
  },
  {
    title: "Sean's Movie 2",
    year: "2001"
  },
  {
    title: "Sean's Movie 3",
    year: "2021"
  }
];

db.Movie.remove({})
  .then(() => db.Movie.collection.insertMany(movieSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
