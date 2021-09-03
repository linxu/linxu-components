import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { ExomeTabs, ExomeTabsProps, Tabs } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

export const Minimal: Story<ExomeTabsProps> = (props: ExomeTabsProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeTabs {...props} />
  </ThemeProvider>
);

Minimal.args = {
  tabIndex: 2,
  enabledTabIndex: false,
  handleChangeTab: (tab: number) => {
    // eslint-disable-next-line no-console
    console.log(`${tab}`);
  },
  items: [
    {
      label: "Zero",
      width: 100,
    },
    {
      label: "First",
      width: 100,
    },
    {
      label: "Second",
      width: 100,
    },
  ],
} as ExomeTabsProps;
