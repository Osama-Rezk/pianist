import { FETCH_GENRES, FETCH_GENRES_ARTIST } from "./types";
import { fetchGenres, fetchGenreArtists } from "../services/genres";

export function getGenres() {
  return async (dispatch: any) => {
    try {
      let res = await fetchGenres();

      return dispatch({
        type: FETCH_GENRES,
        payload: res.data,
      });
    } catch (e) {
      throw e;
    }
  };
}

export function getGenresArtist(id: number) {
  return async (dispatch: any) => {
    try {
      let res = await fetchGenreArtists(id);

      return dispatch({
        type: FETCH_GENRES_ARTIST,
        payload: res.data,
      });
    } catch (e) {
      throw e;
    }
  };
}
