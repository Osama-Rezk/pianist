import reducer from "../genres";
import { FETCH_GENRES, FETCH_GENRES_ARTIST } from "../../actions/types";
import { genreList, artistsList } from "../../utils/data";
import { GenreState } from "../../types";

const INITIAL_STATE: GenreState = {
  data: [],
  artists: [],
};

describe("genres reducer ", () => {
  it("should Hanlde  FETCH_GENRES", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: FETCH_GENRES,
        payload: genreList,
      })
    ).toEqual({
      data: genreList,
      artists: [],
    });
  });

  it("should Hanlde  FETCH_GENRES_ARTIST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: FETCH_GENRES_ARTIST,
        payload: artistsList,
      })
    ).toEqual({
      data: [],
      artists: artistsList,
    });
  });
});
