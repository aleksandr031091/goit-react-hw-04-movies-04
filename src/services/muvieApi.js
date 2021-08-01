import axios from "axios";

axios.defaults.baseURL = "https://developers.themoviedb.org";

const KEY = "076b6abc8ec9f9bff97e57acf85d276e";

export const searchTrandMouve = async () => {
  try {
    // const API = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
    return await axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
      .then((response) => {
        return response;
      });
  } catch (error) {
    console.log(error);
  }
};
