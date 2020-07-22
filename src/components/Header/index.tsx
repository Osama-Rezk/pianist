import React from "react";
import { loginUrl } from "../../constants/config";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import styled from "@emotion/styled";

const Container = styled.nav({
  display: "flex",
  alignItems: "center",
  border: "1px solid rgb(235, 237, 240)",
  color: "rgba(0,0,0,.65)",
  fontSize: 14,
  // width: "100%",
  backgroundColor: "#f8f9fa",
  padding: 10,
  position: "sticky",
});

export const Header: React.FC = () => {
  const { name, id } = useSelector((state: RootState) => state.user);

  return (
    <Container>
      {id ? (
        <div id="welName">Welcome {name}</div>
      ) : (
        <a id="logLink" href={loginUrl}>
          login
        </a>
      )}
    </Container>
  );
};
