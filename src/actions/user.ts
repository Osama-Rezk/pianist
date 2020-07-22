import { FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "./types";
import { getMe } from "../services/user";
import Axios from "axios";
import { genAuthURL } from "../constants/config";

type LoginQuery = string | string[] | null | undefined;
export function signIn(code: LoginQuery, history: any) {
  return async (dispatch: any) => {
    try {
      let res: any = await Axios.get(genAuthURL(code));

      if (res.data === "wrong code") {
        throw new Error("login faileds");
      } else if (res.data.access_token) {
        localStorage.setItem("access_token", res.data.access_token);

        let res2 = await getMe();

        history.push("/home");

        return dispatch({
          type: FETCH_USER_SUCCESS,
          payload: res2,
        });
      }
    } catch (e) {
      throw e;
    }
  };
}

export function fetchMe() {
  return async (dispatch: any) => {
    try {
      let res2 = await getMe();

      if (res2.error && res2.error.code === 300) {
        localStorage.removeItem("access_token");
        return dispatch({
          type: FETCH_USER_FAILED,
        });
      }

      return dispatch({
        type: FETCH_USER_SUCCESS,
        payload: res2,
      });
    } catch (e) {
      throw e;
    }
  };
}
