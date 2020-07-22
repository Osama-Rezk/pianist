import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { FETCH_USER_SUCCESS } from "../types";
import { user } from "../../utils/data";
import { fetchMe, signIn } from "../user";
import nock from "nock";
import { baseURL, authUrl, authController } from "../../constants/config";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const push = jest.fn();
const history = {
  push,
};

describe("fetchMe   action", () => {
  it("creates FETCH_USER_SUCCESS when fetching genres has been done", () => {
    nock(baseURL).get(`/user/me?access_token=null`).reply(200, user);

    const expectedActions = [{ type: FETCH_USER_SUCCESS, payload: user }];
    const store = mockStore();

    return store.dispatch(fetchMe()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("signinaction   action", () => {
  it("creates FETCH_USER_SUCCESS when fetching genres has been done", () => {
    nock(authUrl)
      .get(authController)
      .reply(200, { access_token: "12345567789" });

    nock(baseURL).get(`/user/me?access_token=12345567789`).reply(200, user);

    jest.spyOn(history, "push");

    const expectedActions = [{ type: FETCH_USER_SUCCESS, payload: user }];
    const store = mockStore();

    return store.dispatch(signIn("12345", history)).then(() => {
      // return of async actions
      expect(push).toBeCalled();

      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
