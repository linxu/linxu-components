import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { ExomeCheckbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: ExomeCheckbox,
};

export const Minimal: Story<CheckboxProps> = (props: CheckboxProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeCheckbox {...props} />
  </ThemeProvider>
);

Minimal.args = {
  onChange: undefined,
  checked: true,
};
