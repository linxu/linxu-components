import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { ExomeTag, Tag, TagProps } from "./Tag";

export default {
  title: "Components/Tag",
  component: Tag,
};

export const Minimal: Story<TagProps> = (props: TagProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeTag {...props} />
  </ThemeProvider>
);

Minimal.args = {
  title: "Components/Test",
};

export const Overloaded: Story<TagProps> = (props: TagProps) => (
  <ThemeProvider theme={getTheme()}>
    <ExomeTag {...props} />
  </ThemeProvider>
);

Overloaded.args = {
  title: "Components/Test",
  textColor: "lightGray",
  remove: () => {
    // eslint-disable-next-line no-console
    console.log("remove");
  },
  subtitle: "caption",
  bgColor: "alert",
};
