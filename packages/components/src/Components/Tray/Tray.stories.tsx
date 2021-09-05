import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { ExomeTray, TrayProps } from "./Tray";

export default {
  title: "Components/Tray",
  component: ExomeTray,
};

export const Minimal: Story<TrayProps> = (props) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeTray {...props}>
      <div style={{ padding: 20 }}>Hello Tray</div>
    </ExomeTray>
  </ThemeProvider>
);

Minimal.args = {
  open: true,
  anchor: "left"
} as TrayProps;
