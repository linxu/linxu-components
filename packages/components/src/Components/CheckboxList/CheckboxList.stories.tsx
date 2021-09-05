import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import {
  CheckboxListProps,
  ExomeCheckboxList,
} from "./CheckboxList";

export default {
  title: "Components/CheckboxList",
  component: ExomeCheckboxList,
};

export const Minimal: Story<CheckboxListProps> = (props: CheckboxListProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeCheckboxList {...props} />
  </ThemeProvider>
);

Minimal.args = {
  data: [
    { id: 23424, name: "Carrots", summary: "USD30,00" },
    { id: 43534, name: "Potatoes", summary: "USD45,00" },
  ],
  nameKey: "name",
  summaryKey: "summary",
  // eslint-disable-next-line no-unused-vars
  onChecked: (_: number[]) => {},
};

export const WithoutData: Story<CheckboxListProps> = (
  props: CheckboxListProps
) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeCheckboxList {...props} />
  </ThemeProvider>
);

WithoutData.args = {};

export const DefaultKeys: Story<CheckboxListProps> = (
  props: CheckboxListProps
) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeCheckboxList {...props} />
  </ThemeProvider>
);

DefaultKeys.args = {
  data: [
    { id: 23424, name: "Carrots", summary: "USD30,00" },
    { id: 43534, name: "Potatoes", summary: "USD45,00" },
  ],
};
