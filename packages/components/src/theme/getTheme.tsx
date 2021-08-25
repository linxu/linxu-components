import { ExomeTheme, ThemeProvider } from "styled-components";
import React from "react";
import {baseTheme} from "./BaseTheme";
import {commonColors} from "./CommonColors";

export const getTheme = (): ExomeTheme => ({
  ...baseTheme,
  ...{
    name: "exome system",
    colors: {
      sell: { main: "#002366", hover: "rgb(0, 24, 71)" },
      ...commonColors,
    },
  },
});

interface Props {
  children: React.ReactElement;
}

export const ExomeProvider = ({ children }: Props): React.ReactElement => (
  <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
);
