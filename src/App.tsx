import React, { useEffect } from "react";
import { AppRoutes } from "./AppRoutes";
import { fetchMe } from "../src/actions/user";
import { useDispatch } from "react-redux";
import { getJwt } from "./utils/auth";
import { Global, css } from "@emotion/core";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getJwt()) dispatch(fetchMe());
  }, []);

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
              "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
              "Helvetica Neue", sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          code {
            font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
              monospace;
          }
        `}
      />
      <AppRoutes />
    </>
  );
}

export default App;
