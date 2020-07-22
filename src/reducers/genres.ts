import { FETCH_GENRES, FETCH_GENRES_ARTIST } from "../actions/types";
import { GenreState, GenreActionTypes } from "../types";

const INITIAL_STATE: GenreState = {
  data: [],
  artists: [],
};

export default (state = INITIAL_STATE, action: GenreActionTypes) => {
  switch (action.type) {
    case FETCH_GENRES:
      return {
        ...state,
        data: action.payload,
      };

    case FETCH_GENRES_ARTIST:
      return {
        ...state,
        artists: action.payload,
      };

    default:
      return state;
  }
};
