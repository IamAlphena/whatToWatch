const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieDB");

const movieSeed = [
  {
    backdrop_path: "/zTxHf9iIOCqRbxvl8W5QYKrsMLq.jpg",
    genre_ids: [12, 35, 14],
    id: 512200,
    media_type: "movie",
    original_title: "Jumanji: The Next Level",
    overview:
      "As the gang return to Jumanji to rescue one of their own, they discover that nothing is as they expect. The players will have to brave parts unknown and unexplored in order to escape the world’s most dangerous game.",
    poster_path: "/jyw8VKYEiM1UDzPB7NsisUgBeJ8.jpg",
    release_date: "2019-12-04",
    vote_average: 7,
    vote_count: 5733,
  },
];
