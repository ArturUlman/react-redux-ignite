import axios from "axios";
import { popularGamesURL } from "../api";

//action creator

export const loadGames = () => async (dispatch) => {
  // fetch axios
  const popularData = await axios.get(popularGamesURL());
  // return url https: api.rawg.io/games etc...
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
