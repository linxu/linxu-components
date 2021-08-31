import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { Colors } from "../../theme/Colors";
import { Text, TextProps } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
};

export const Minimal: Story<TextProps> = (props) => (
  <ThemeProvider theme={getTheme()}>
    <Text {...props}>A sample text</Text>
  </ThemeProvider>
);

Minimal.args = {
  fontSize: undefined,
  textColor: undefined,
  bold: undefined,
  underline: undefined,
  element: undefined,
  cursorMouse: undefined,
} as TextProps;

export const Overloaded: Story<TextProps> = (props) => (
  <ThemeProvider theme={getTheme()}>
    <Text {...props}>A sample text</Text>
  </ThemeProvider>
);

Overloaded.args = {
  fontSize: "mega",
  textColor: "lightBlue" as keyof Colors,
  bold: true,
  underline: true,
  cursorMouse: true,
  element: "h2",
};
