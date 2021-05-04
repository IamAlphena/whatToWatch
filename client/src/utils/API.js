import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const API = {
    getMovie: async (title) => {
    const url = `https://api.themoviedb.org/3/search/multi/?api_key=${apiKey}&language=en-US&query=${title}&page=1&include_adult=false`;

    let movieData = await axios.get(url);
    console.log(movieData);
    // return movieData
  },
};

export default API;
