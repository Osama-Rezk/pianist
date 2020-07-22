import { combineReducers } from "redux";

import genres from "./genres";
import user from "./user";

export const rootReducer = combineReducers({
  genres,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;
