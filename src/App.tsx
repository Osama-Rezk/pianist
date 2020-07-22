import React, { useEffect } from "react";
import { AppRoutes } from "./AppRoutes";
import { fetchMe } from "../src/actions/user";
import { useDispatch } from "react-redux";
import { getJwt } from "./utils/auth";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (getJwt()) dispatch(fetchMe());
  }, []);
  return <AppRoutes />;
}

export default App;
