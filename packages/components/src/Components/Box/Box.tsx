import styled from "styled-components";
import { Colors } from "../../theme/Colors";

// BoxProps as weell
export interface BoxProps {
  // Box background color, e.g.: pureWhite
  background?: keyof Colors;
  // Box border color, e.g.: lightGray
  color?: keyof Colors;
  // Box width, e.g.: auto
  width?: string;
  // Box height, e.g.: auto
  height?: string;
  // Box margin, e.g.: auto
  margin?: string;
  // Box padding, e.g.: auto
  padding?: string;
}

// Box component serves as a wrapper component for most of the CSS utility needs.
export const Box = styled.div<BoxProps>`
  background: ${({ background, theme }) => {
    if (background) {
      return theme.colors[background];
    }
    return theme.colors.pureWhite;
  }};
  border: 1px solid;
  color: ${({ color, theme }) => {
    if (color) {
      return theme.colors[color];
    }
    return theme.colors.lightGray;
  }};
  border-radius: 2px;
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "auto"};
  padding: ${({ padding }) => padding || "auto"};
  overflow: auto;
`;

export const ExomeBox = Box;
