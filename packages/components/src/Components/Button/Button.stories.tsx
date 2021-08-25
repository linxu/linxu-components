import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "theme/getTheme";
import { Button, ButtonProps, ExomeButton } from "Components/Button/Button";

// noinspection JSUnusedGlobalSymbols
export default {
  title: "Components/Button",
  component: ExomeButton,
};

export const Minimal: Story<ButtonProps> = (props: ButtonProps) => (
  <ThemeProvider theme={getTheme()}>
    <Button {...props}>Voltar</Button>
  </ThemeProvider>
);

Minimal.args = {
  disabled: false,
  width: "300",
  bold: true,
  bgColor: "lightRed",
  borderRadius: "3px",
  textColor: "alert",
  border: undefined,
  padding: "10px",
};
