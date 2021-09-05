import React from "react";
import { render, screen } from "@testing-library/react";

import { Minimal } from "./Badge.stories";
import { BadgeProps } from "./Badge";
import { Colors } from "../../theme/Colors";

it("renders the badge with color", async () => {
  render(
    <Minimal
      {...(Minimal.args as BadgeProps)}
      color={"sdfdsf" as keyof Colors}
      bgColor="lightGray"
    />
  );
  const actual = await screen.findByTestId("badge");
  expect(actual).toBeTruthy();
});
