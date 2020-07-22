import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getGenres, getGenresArtist } from "../genres";
import { FETCH_GENRES, FETCH_GENRES_ARTIST } from "../types";
import { genreList, artistsList } from "../../utils/data";
import nock from "nock";
import { baseURL } from "../../constants/config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("getGenres  action", () => {
  it("creates FETCH_GENRES when fetching genres has been done", () => {
    nock(baseURL).get(`/genre`).reply(200, {
      data: genreList,
    });

    const expectedActions = [{ type: FETCH_GENRES, payload: genreList }];
    const store = mockStore();

    return store.dispatch(getGenres()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("getGenresArtist   action", () => {
  it("creates FETCH_GENRES when fetching genres has been done", () => {
    nock(baseURL).get(`/genre/1/artists`).reply(200, {
      data: artistsList,
    });

    const expectedActions = [
      { type: FETCH_GENRES_ARTIST, payload: artistsList },
    ];
    const store = mockStore();

    return store.dispatch(getGenresArtist(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
