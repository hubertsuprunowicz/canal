const ALL_MOVIES_PER_PAGE = 20;

describe("Movies view tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("Modal open & close", () => {
    const FIRST_MOVIE = "Cobra Kai";
    cy.get('[data-testid="inner-modal"]').should("not.exist");
    cy.get(
      '[data-testid="movies-wrapper"] > :first-child() [data-testid="open-modal-button"]'
    )
      .should("be.visible")
      .click();
    cy.contains('[data-testid="inner-modal"]', FIRST_MOVIE).should(
      "be.visible"
    );
    cy.get('[data-testid="modal-close-button"]').should("be.visible").click();
  });

  it("Search with records", () => {
    const THREE_RECORDS_SEARCH_INPUT = "ASD";
    cy.get('[data-testid="search-movies-input"]').should("have.text", "");
    cy.get('[data-testid="movie-card"]').should(
      "have.length",
      ALL_MOVIES_PER_PAGE
    );

    // Send request via search input and wait for response
    cy.intercept("GET", `/${THREE_RECORDS_SEARCH_INPUT}*`).as("getMovies");
    cy.get('[data-testid="search-movies-input"]').type(
      THREE_RECORDS_SEARCH_INPUT
    );
    cy.wait("@getMovies");

    cy.get('[data-testid="movie-card"]').should("have.length", 3);

    // Clear search input to fetch all movies
    cy.get('[data-testid="search-movies-input"]').clear();
    cy.intercept("GET", `/*`).as("getMovies");
    cy.wait("@getMovies");

    cy.get('[data-testid="movie-card"]').should(
      "have.length",
      ALL_MOVIES_PER_PAGE
    );
  });

  it("Pagination with records", () => {
    cy.get('[data-testid="prev-pagination-btn"]')
      .should("be.visible")
      .and("be.disabled");
    cy.get('[data-testid="next-pagination-btn"]')
      .should("be.visible")
      .and("not.be.disabled");
    cy.get('[data-testid="current-page-number"]')
      .should("be.visible")
      .and("have.text", "1");

    cy.get('[data-testid="next-pagination-btn"]').click();
    cy.get('[data-testid="prev-pagination-btn"]').should("not.be.disabled");
    cy.get('[data-testid="next-pagination-btn"]').should("not.be.disabled");
    cy.get('[data-testid="current-page-number"]')
      .should("be.visible")
      .and("have.text", "2");

    cy.get('[data-testid="prev-pagination-btn"]').click();
    cy.get('[data-testid="prev-pagination-btn"]')
      .should("be.visible")
      .and("be.disabled");
    cy.get('[data-testid="next-pagination-btn"]')
      .should("be.visible")
      .and("not.be.disabled");
    cy.get('[data-testid="current-page-number"]')
      .should("be.visible")
      .and("have.text", "1");
  });

  it("Pagination with records and search", () => {
    const TWO_PAGES_SEARCH_INPUT = "Allen";
    const SND_PAGE_MOVIES_QTY = 11;

    cy.get('[data-testid="prev-pagination-btn"]').should("be.disabled");
    cy.get('[data-testid="next-pagination-btn"]').should("not.be.disabled");
    cy.get('[data-testid="current-page-number"]').should("have.text", "1");
    cy.get('[data-testid="search-movies-input"]').should("have.text", "");
    cy.get('[data-testid="movie-card"]').should(
      "have.length",
      ALL_MOVIES_PER_PAGE
    );

    // Send request via search input and wait for response
    cy.intercept("GET", `/${TWO_PAGES_SEARCH_INPUT}*`).as("getMovies");
    cy.get('[data-testid="search-movies-input"]').type(TWO_PAGES_SEARCH_INPUT);
    cy.wait("@getMovies");

    cy.get(
      '[data-testid="movies-wrapper"] > :first-child() [data-testid="movie-name"]'
    ).contains(TWO_PAGES_SEARCH_INPUT);
    cy.get('[data-testid="next-pagination-btn"]').click();

    cy.get('[data-testid="movie-card"]').should(
      "have.length",
      SND_PAGE_MOVIES_QTY
    );
    cy.get('[data-testid="current-page-number"]').should("have.text", "2");

    // Due to last page `next` button is disabled
    cy.get('[data-testid="next-pagination-btn"]').should("be.disabled");
  });
});
