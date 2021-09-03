import React from "react";
import { Story } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { getTheme } from "../../theme/getTheme";
import { FlexContainer, FlexContainerProps } from "./FlexContainer";
import { FlexItem } from "./FlexItem";

export default {
  title: "Components/FlexContainer",
  component: FlexContainer,
};

export const FlexContainerStory: Story<FlexContainerProps> = (props) => (
  <ThemeProvider theme={getTheme()}>
    <FlexContainer {...props}>
      <FlexItem flexGrow={1}>
        <h6>Here</h6>
      </FlexItem>
      <FlexItem>
        <h6>Here</h6>
      </FlexItem>
    </FlexContainer>
  </ThemeProvider>
);

FlexContainerStory.args = {};
