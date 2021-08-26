import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "theme/getTheme";
import { BoxProps, ExomeBox } from "Components/Box/Box";

export default {
  title: "Components/Box",
  component: ExomeBox,
};

export const Minimal: Story<BoxProps> = (props: BoxProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeBox {...props}>
      <h4 data-testid="box">Example</h4>
    </ExomeBox>
  </ThemeProvider>
);

Minimal.args = {
  color: "black",
  padding: undefined,
  width: undefined,
  background: undefined,
  margin: undefined,
  height: undefined,
};
