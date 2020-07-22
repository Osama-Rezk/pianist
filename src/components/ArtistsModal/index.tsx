import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { getGenresArtist } from "../../actions/genres";
import { useParams } from "react-router-dom";
import { ArtistsList } from "../ArtistsList";
import { Loader } from "../Loader";
import { Error } from "../Error";
import styled from "@emotion/styled";
import backIcon from "../../assets/back.svg";
interface ArtistModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CloseButton = styled.button({
  border: "none",
  backgroundColor: "transparent",
});
const Image = styled.img({
  height: 30,
  width: 30,
});

const ModalHeader = styled.div({
  position: "fixed",
});

const ModalBody = styled.div({
  overflowY: "auto",
});

export const ArtistsModal: React.FC<ArtistModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      getArtists();
    }
  }, [id]);

  const getArtists = async () => {
    try {
      setLoading(true);
      await dispatch(getGenresArtist(id));
      setLoading(false);
    } catch (error) {
      setErr("some thins bad happend or artists of this genre doesnot exist");
      setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`     
 .ReactModal__Overlay {
  opacity: 0;
  transform: translateX(-100px);
  transition: all 500ms ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
  transform: translateX(0px);
}

.ReactModal__Overlay--before-close {
  opacity: 0;
  transform: translateX(-100px);
}
`}
        >
      </style>
      <Modal
        ariaHideApp={false}
        closeTimeoutMS={500}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
      >
        <ModalHeader>
          <CloseButton onClick={closeModal}>
            <Image src={backIcon} />
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          {loading ? (
            <Loader />
          ) : err ? (
            <Error message={err} />
          ) : (
            <ArtistsList />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};
