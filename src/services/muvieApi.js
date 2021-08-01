import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const KEY = "076b6abc8ec9f9bff97e57acf85d276e";

export const searchTrandMouve = async () => {
  try {
    return await axios
      .get(`trending/movie/day?api_key=${KEY}`)
      .then((response) => {
        return response;
      });
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async (query) => {
  try {
    return await axios
      .get(`search/movie?query=${query}&api_key=${KEY}`)
      .then((response) => {
        return response;
      });
  } catch (error) {
    console.log(error);
  }
};

export const searchMouvesDetails = async (id) => {
  try {
    return await axios
      .get(`search/movie/${id}?api_key=${KEY}`)
      .then((response) => {
        return response;
      });
  } catch (error) {
    console.log(error);
  }
};
