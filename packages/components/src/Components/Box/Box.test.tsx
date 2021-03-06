import React from "react";
import { render, screen } from "@testing-library/react";

import { Minimal } from "./Box.stories";
import { BoxProps } from "./Box";

it("renders the badge with color", async () => {
  render(
    <Minimal
      {...(Minimal.args as BoxProps)}
      color="lightRed"
      background="black"
      padding="5px"
    />
  );
  const actual = await screen.findByTestId("box");
  expect(actual).toHaveTextContent("Example");
});
