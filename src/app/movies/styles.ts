import { styled } from "@stitches/react";

const CardWrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  flex: 1,
  justifyContent: "center",
  gap: "$6",
});

const SearchWrapper = styled("div", {
  display: "flex",
  width: "100%",
  minHeight: "200px",
  maxHeight: "300px",
  padding: "$5 $11",
});

const StyledCard = styled("div", {
  width: 300,
  height: 500,
  padding: "$5",
  backgroundColor: "white",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const ContentWrapper = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  backgroundColor: "DimGrey",
  padding: "$7",
});

export { CardWrapper, SearchWrapper, StyledCard, Content, ContentWrapper };
