import React from "react";
import { render, screen } from "@testing-library/react";

// 👇 Imports a specific story for the test
import { FlexContainerStory } from "./FlexContainer.stories";

it("renders the FlexContainerStory with 2 items", async () => {
  render(<FlexContainerStory />);
  const actual = await screen.findAllByText("Here");
  expect(actual.length).toBe(2);
});

it("renders the FlexContainerStory with flexDirection", async () => {
  render(<FlexContainerStory flexDirection="column" />);
  const actual = await screen.findAllByText("Here");
  expect(actual.length).toBe(2);
});
