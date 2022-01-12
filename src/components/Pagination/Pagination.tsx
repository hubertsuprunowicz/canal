import { Button } from "components";
import React from "react";
import { PaginationWrapper } from "./styles";

type Props = {
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: () => void;
  nextPage: () => void;
  page: number;
};

const Pagination: React.FC<Props> = ({
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
  page,
}) => {
  return (
    <PaginationWrapper>
      <Button
        data-testid="prev-pagination-btn"
        type="button"
        disabled={!hasPrevPage}
        onClick={prevPage}
      >
        Prev
      </Button>
      <p data-testid="current-page-number">{page}</p>
      <Button
        data-testid="next-pagination-btn"
        type="button"
        disabled={!hasNextPage}
        onClick={nextPage}
      >
        Next
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
