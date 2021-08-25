import React from "react";
import { render, screen } from "@testing-library/react";
import { Minimal, Overloaded } from "Components/Text/Text.stories";

it("renders the FlexContainerStory with 2 items", async () => {
  render(<Minimal {...Minimal.args} />);
  const actual = await screen.findAllByText("A sample text");
  expect(actual.length).toBe(1);
});

it("renders the FlexContainerStory with 2 items", async () => {
  render(<Overloaded {...Overloaded.args} />);
  const actual = await screen.findAllByText("A sample text");
  expect(actual.length).toBe(1);
});
