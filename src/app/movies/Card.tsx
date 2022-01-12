import React, { useState } from "react";
import { Button } from "components";
import { Movie } from "app/movies/api";
import MovieModal from "./MovieModal";
import { StyledCard, Content } from "./styles";

type Props = {
  movie: Movie;
};

const Card: React.FC<Props> = ({ movie }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <StyledCard data-testid="movie-card">
      <Content>
        {movie.id}
        <img src={movie.name} alt={`Image of ${movie.name} movie`} />

        <span data-testid="movie-name">{movie.name}</span>
        {movie.popularity}
      </Content>
      <Button
        data-testid="open-modal-button"
        onClick={() => setModalOpen(true)}
      >
        Show details
      </Button>

      {isModalOpen && (
        <MovieModal movie={movie} onClose={() => setModalOpen(false)} />
      )}
    </StyledCard>
  );
};

export default Card;
