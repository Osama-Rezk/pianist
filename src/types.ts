import {
  FETCH_GENRES_ARTIST,
  FETCH_GENRES,
  FETCH_USER_SUCCESS,
} from "./actions/types";
export interface Genre {
  id: number;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  type: string;
}

export interface Artist {
  id: number;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface GenreState {
  data: Genre[];
  artists: Artist[];
}

export interface UserState {
  name: string;
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  status: number;
  birthday: string;
  inscription_date: string;
  gender: string;
  picture: string;
  type: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  country: string;
  is_kid: boolean;
}

export interface FetchGenresAction {
  type: typeof FETCH_GENRES;
  payload: Genre[];
}

export interface FetchGenresArtistsAction {
  type: typeof FETCH_GENRES_ARTIST;
  payload: Artist[];
}

export interface FetchUserAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: UserState;
}

export type GenreActionTypes = FetchGenresAction | FetchGenresArtistsAction;

export type UserActionTypes = FetchUserAction;
