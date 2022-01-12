import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "system";
import { render, fireEvent } from "tests";
import { Pagination } from "components";
import Header from "./Header";
import { Movies } from "./Movies";

const queryClient = new QueryClient();

const TestProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

describe("Movies", () => {
  test("Initial movie view", async () => {
    const { getByTestId } = render(
      <TestProvider>
        <Movies />
      </TestProvider>
    );

    expect(getByTestId("movies-layout")).toMatchSnapshot();
  });

  test("Pagination initialized and counter", async () => {
    const page = 10;
    const hasNextPage = false;
    const hasPrevPage = true;
    const prevPage = () => {};
    const nextPage = () => {};

    const { getByTestId } = render(
      <Pagination
        page={page}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    );

    expect(getByTestId("prev-pagination-btn")).toBeInTheDocument();
    expect(getByTestId("current-page-number")).toBeInTheDocument();
    expect(getByTestId("next-pagination-btn")).toBeInTheDocument();
  });

  test("Pagination disabled prev button", async () => {
    const page = 1;
    const hasNextPage = true;
    const hasPrevPage = false;
    const prevPage = () => {};
    const nextPage = () => {};

    const { getByTestId } = render(
      <Pagination
        page={page}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    );

    expect(getByTestId("prev-pagination-btn")).toBeDisabled();
    expect(getByTestId("next-pagination-btn")).not.toBeDisabled();
  });

  test("Pagination disabled next button", async () => {
    const page = 1;
    const hasNextPage = false;
    const hasPrevPage = true;
    const prevPage = () => {};
    const nextPage = () => {};

    const { getByTestId } = render(
      <Pagination
        page={page}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    );

    expect(getByTestId("prev-pagination-btn")).not.toBeDisabled();
    expect(getByTestId("next-pagination-btn")).toBeDisabled();
  });

  test("Search input value", async () => {
    const { getByTestId } = render(<Header />);
    const searchInput = getByTestId("search-movies-input");

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveTextContent("");

    fireEvent.change(searchInput, { target: { value: "23" } });

    expect((searchInput as any).value).toBe("23");
  });
});
