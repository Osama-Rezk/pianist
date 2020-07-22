import { Genre, Artist, UserState } from "../types";

export const genreList: Genre[] = [
  {
    id: 1,
    name: "POP",
    picture: "",
    picture_big: "",
    picture_medium: "",
    picture_small: "",
    picture_xl: "",
    type: "",
  },
  {
    id: 1,
    name: "R & R",
    picture: "",
    picture_big: "",
    picture_medium: "",
    picture_small: "",
    picture_xl: "",
    type: "",
  },
];

export const artistsList: Artist[] = [
  {
    id: 1,
    name: "Artist 1",
    picture: "",
    picture_big: "",
    picture_medium: "",
    picture_small: "",
    picture_xl: "",
    type: "",
    radio: false,
    tracklist: "",
  },
  {
    id: 2,
    name: "Artist 2",
    picture: "",
    picture_big: "",
    picture_medium: "",
    picture_small: "",
    picture_xl: "",
    type: "",
    radio: false,
    tracklist: "",
  },
];

export const user: UserState = {
  name: "user",
  id: 1,
  lastname: "",
  firstname: "",
  email: "",
  status: 1,
  birthday: "",
  inscription_date: "",
  gender: "",
  picture: "",
  type: "",
  picture_big: "",
  picture_medium: "",
  picture_small: "",
  picture_xl: "",
  country: "",
  is_kid: false,
};
