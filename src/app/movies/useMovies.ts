import { useState, useMemo, useEffect } from "react";
import { useQuery } from "react-query";
import { searchMovies, getMovies, MovieRequest } from "./api";

export const useMovies = (search?: string) => {
  const [page, setPage] = useState(1);

  const fetch = search
    ? (page: number) => searchMovies({ page, search })
    : (page: number) => getMovies({ page });

  const { data, error, refetch, isLoading } = useQuery<MovieRequest>(
    ["movies", page],
    () => fetch(page),
    { keepPreviousData: true, staleTime: 5000 }
  );

  if (error) {
    throw new Error("Unable to load [movies]");
  }

  const { currentPage, movies, totalPages } = useMemo(() => {
    if (!data) {
      return {
        currentPage: 1,
        totalPages: 1,
        movies: [],
      };
    }

    return {
      currentPage: data.page,
      totalPages: data.total_pages,
      movies: data.results,
    };
  }, [data]);

  const hasNextPage = !isLoading && currentPage < totalPages;
  const hasPrevPage = !isLoading && currentPage > 1;

  const handleNextPage = () => {
    if (hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (hasPrevPage) {
      setPage((prev) => prev - 1);
    }
  };

  const reset = () => {
    setPage(1);
    refetch();
  };

  useEffect(reset, [search]);

  return {
    page,
    hasNextPage,
    hasPrevPage,
    prevPage: handlePrevPage,
    nextPage: handleNextPage,
    movies,
    isLoading,
  };
};
