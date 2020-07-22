import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import promise from "redux-promise-middleware";

import { rootReducer } from "./reducers";

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(ReduxThunk, promise)
);

export default store;
