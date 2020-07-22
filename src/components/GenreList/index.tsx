import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { GenreCard } from "../GenreCard";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { useParams, useHistory } from "react-router-dom";
import { ArtistsModal } from "../ArtistsModal";

const Container = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gridGap: "1rem",
});

export const GenreList: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.genres);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    if (id) {
      openModal(id);
    } else {
      closeModal(true);
    }
  }, [id]);

  const openModal = (id: number) => {
    setIsOpen(true);
  };

  const goToArtists = (id: number) => {
    history.push(`/home/${id}`);
  };

  const closeModal = (willNotNvigate: boolean) => {
    setIsOpen(false);
    if (!willNotNvigate) history.goBack();
  };
  const renderGeners = () => {
    return data.map((item) => (
      <GenreCard key={item.name} {...item} onClick={goToArtists} />
    ));
  };
  return (
    <>
      <Container>{renderGeners()}</Container>

      <ArtistsModal isOpen={modalIsOpen} closeModal={() => closeModal(false)} />
    </>
  );
};
