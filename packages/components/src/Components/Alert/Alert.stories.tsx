import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { AlertProps, Alert } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
};

export const Minimal: Story<AlertProps> = (props: AlertProps) => (
  <ThemeProvider theme={getTheme()}>
    <Alert {...props}>
      <h2>hello</h2>
    </Alert>
  </ThemeProvider>
);

Minimal.args = {
  title: "Components/Danger!!",
  icon: undefined,
  color: undefined,
};
