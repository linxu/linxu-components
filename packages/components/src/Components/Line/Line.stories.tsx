import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { Line, LineProps } from "./Line";

export default {
  title: "Components/Line",
  component: Line,
};

export const LineStory: Story<LineProps> = (props) => (
  <ThemeProvider theme={getTheme()}>
    <Line {...props} />
  </ThemeProvider>
);

LineStory.args = {
  color: "lightGray",
  height: "3px",
  width: "auto",
  margin: "10px",
};
export const EmptyLineStory: Story<LineProps> = (props) => (
  <ThemeProvider theme={getTheme()}>
    <Line {...props} />
  </ThemeProvider>
);

EmptyLineStory.args = {
  color: undefined,
  height: undefined,
  width: undefined,
  margin: undefined,
};
