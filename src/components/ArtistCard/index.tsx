import React from "react";
import styled from "@emotion/styled";
import { Artist } from "../../types";

const Container = styled.figure({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Description = styled.h1({
  color: "#191919",
  fontSize: 20,
});

const Image = styled.img({
  height: 264,
  borderRadius: "50%",
  width: 264,
  boxShadow: "0 1px 6px rgba(25,25,34,.16)",
  marginBottom: 5,
});

export const ArtistCard: React.FC<Artist> = (props) => {
  const { name, picture } = props;
  return (
    <Container>
      <Image alt={`a picture of artist ${name}`} id="artistpic" src={picture} />
      <Description id="artistname">{name}</Description>
    </Container>
  );
};
