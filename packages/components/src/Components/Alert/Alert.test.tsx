import React from "react";
import { render, screen } from "@testing-library/react";

import { Minimal } from "./Alert.stories";
import { AlertProps } from "./Alert";

it("renders the alert with color", async () => {
  render(<Minimal {...(Minimal.args as AlertProps)} color="lightRed" />);
  const actual = await screen.findByTestId("alert-body");
  expect(actual).toHaveTextContent("hello");
});

it("renders the alert with icon", async () => {
  render(
    <Minimal
      {...(Minimal.args as AlertProps)}
      color={undefined}
      icon={<div data-testid="icon">hello</div>}
    />
  );
  const actual = await screen.findByTestId("icon");
  expect(actual).toHaveTextContent("hello");
});
