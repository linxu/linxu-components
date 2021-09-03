import React from "react";
import styled, { css } from "styled-components";

export interface FlexContainerProps {
  // The property is used to align the flex items
  justifyContent?: string;
  // The property is used to align the flex items
  alignItems?: string;
  // The property is define contaner max width
  maxWidth?: string;
  // The property defines in which direction the container wants to stack the flex items
  flexDirection?: string;
  // native styles
  style?: React.CSSProperties;
}

/** @component */
/**
 * The flex container becomes flexible by setting the display property to flex
 */
export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  ${({ flexDirection }) => flexDirection
    && css`
      flex-direction: ${flexDirection};
    `}
`;

export const ExomeFlexContainer = FlexContainer;
