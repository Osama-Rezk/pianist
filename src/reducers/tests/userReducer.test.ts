import reducer from "../user";
import { FETCH_USER_SUCCESS } from "../../actions/types";
import { user } from "../../utils/data";
import { UserState } from "../../types";

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

describe("genres reducer ", () => {
  it("should Hanlde  FETCH_USER_SUCCESS", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: FETCH_USER_SUCCESS,
        payload: user,
      })
    ).toEqual(user);
  });
});
