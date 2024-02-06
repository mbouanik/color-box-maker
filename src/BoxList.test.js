import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("render without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment).toMatchSnapshot();
});

it("should add a new box", () => {
  const { queryByText, debug, getByTestId } = render(<BoxList />);
  expect(queryByText("X")).not.toBeInTheDocument();
  const btn = queryByText("Submit");
  const width = getByTestId("width");
  const height = getByTestId("height");
  const bgc = getByTestId("bgc");
  fireEvent.change(width, { target: { value: "100" } });
  fireEvent.change(height, { target: { value: "100" } });
  fireEvent.change(bgc, { target: { value: "blue" } });
  fireEvent.click(btn);
  expect(queryByText("X")).toBeInTheDocument();
});
