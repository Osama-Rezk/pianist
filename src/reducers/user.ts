import { FETCH_USER_SUCCESS } from "../actions/types";
import { UserActionTypes, UserState } from "../types";

const INITIAL_STATE: UserState = {
  name: "",
  id: 0,
  lastname: "",
  firstname: "",
  email: "",
  status: 0,
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

export default (state = INITIAL_STATE, action: UserActionTypes) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
