import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { ClearIcon, ClearIconProps } from "./ClearIcon";

export default {
  title: "Icons/Clear",
  component: ClearIcon,
};

export const Minimal: Story<ClearIconProps> = (props: ClearIconProps) => (
  <ThemeProvider theme={getTheme()}>
    <ClearIcon {...props} />
  </ThemeProvider>
);

Minimal.args = {
  width: "30px",
  height: "30px",
  color: "lightGray",
};
