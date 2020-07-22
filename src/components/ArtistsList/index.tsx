import React from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { ArtistCard } from "../ArtistCard";

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "1rem",
});

export const ArtistsList: React.FC = () => {
  const { artists } = useSelector((state: RootState) => state.genres);

  const renderArtists = () =>
    artists.map((item) => <ArtistCard key={item.id} {...item} />);

  return <Container>{renderArtists()}</Container>;
};
