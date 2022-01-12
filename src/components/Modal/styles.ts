import { styled } from "@stitches/react";
import { Button } from "components";

const OuterModal = styled("div", {
  position: "fixed",
  zIndex: 10,
  inset: 0,

  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
});

const InnerModal = styled("div", {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",

  width: 500,
  height: 500,

  backgroundColor: "$background100",
});

const CloseButton = styled(Button, {
  position: "absolute",
  top: 20,
  right: 20,
  width: "100px",
});

const Wrapper = styled("div", {
  position: "relative",
});

const Content = styled("div", {
  padding: "$6",
});

export { OuterModal, InnerModal, CloseButton, Wrapper, Content };
