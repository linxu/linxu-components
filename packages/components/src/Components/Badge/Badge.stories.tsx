import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { BadgeProps, ExomeBadge } from "./Badge";

export default {
  title: "Components/Badge",
  component: ExomeBadge,
};

export const Minimal: Story<BadgeProps> = (props: BadgeProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeBadge {...props} />
  </ThemeProvider>
);

Minimal.args = {
  title: "Components/Example",
};

export const Overloaded: Story<BadgeProps> = (props: BadgeProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeBadge {...props} />
  </ThemeProvider>
);

Overloaded.args = {
  title: "Components/Example",
  color: "lightGray",
  padding: "10px",
  bgColor: "lightGray",
  radius: "5px",
};
