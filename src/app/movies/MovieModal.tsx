import { Modal } from "components";
import React from "react";
import { Movie } from "./api";

type Props = {
  movie: Movie;
  onClose: () => void;
};

const MovieModal: React.FC<Props> = ({ movie, onClose }) => {
  return <Modal onClose={onClose}>{movie.name}</Modal>;
};

export default MovieModal;
