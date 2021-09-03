import React from "react";
import styled, { css } from "styled-components";
import { Tabs, TabsProps } from "@material-ui/core";

interface Props extends TabsProps {
  onChange: any;
  tabWidth?: number | string;
  tabLeft: number;
}

export const TabsContainer = styled(
  ({ tabLeft, tabWidth, ...props }: Props) => <Tabs {...props} />
).attrs(() => ({
  classes: {
    root: "tabs-container",
    indicator: "tabs-indicator",
  },
}))<Props>`
  &.tabs-container {
    min-height: 33px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
  .tabs-indicator {
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    ${(props) =>
      props.tabWidth &&
      css`
        width: ${props.tabWidth}px !important;
      `};
    ${(props) =>
      // props.tabLeft &&
      css`
        left: ${props.tabLeft}px !important;
      `};
  }
`;
