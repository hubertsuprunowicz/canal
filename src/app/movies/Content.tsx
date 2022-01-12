import { Pagination } from 'components';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
import { ContentWrapper, CardWrapper } from './styles';
import { useMovies } from './useMovies';

const Content: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchParam = params.get('search') ?? '';
  const {
    page,
    hasPrevPage,
    hasNextPage,
    movies,
    nextPage,
    prevPage,
    isLoading,
  } = useMovies(searchParam);

  return (
    <ContentWrapper>
      <CardWrapper data-testid="movies-wrapper">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        )}
      </CardWrapper>
      <Pagination
        page={page}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </ContentWrapper>
  );
};

export default Content;
