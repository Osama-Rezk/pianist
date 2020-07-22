import React from "react";
import styled from "@emotion/styled";
import { Genre } from "../../types";
import { Button } from "../Button";

const Container = styled.figure({
  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  boxShadow: " 0 1px 6px rgba(25,25,34,.16)",
  transition: "all .2s ease-in-out",
  "&:hover,&:focus": {
    transform: "scale(1.1)",
  },
  position: "relative",
});

const Description = styled.h1({
  color: "white",
  textAlign: "center",
  position: "absolute",
  left: "50%",
  top: "50%",
  fontSize: 25,
  transform: "translate(-50%, -50%)",
  fontWeight: "bold",
});

const Image = styled.img({
  height: 134,
  width: "100%",
  borderRadius: 5,
  objectFit: "cover",
});
interface GenreCardProps extends Genre {
  onClick: (id: number) => void;
}

export const GenreCard: React.FC<GenreCardProps> = (props) => {
  const { id, name, picture, onClick } = props;
  return (
    <Container onClick={() => onClick(id)}>
      <Description id="genrename">{name}</Description>
      <Image alt={`a picture of genre ${name}`} id="genrepic" src={picture} />
      <Button
        title="show artists"
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
      />
    </Container>
  );
};
