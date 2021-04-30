const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  backdrop_path: { type: String },
  genre_ids: { type: Number },
  id: { type: Number },
  original_title: { type: String },
  overview: { type: String },
  poster_path: { type: String },
  vote_average: { type: Number },
  vote_count: { type: Number },
});

const movie = mongoose.model("movieDB", movieSchema);

module.exports = movie;
