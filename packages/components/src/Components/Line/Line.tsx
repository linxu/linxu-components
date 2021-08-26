import styled from "styled-components";
import {Colors} from "../../theme/Colors";

export interface LineProps {
  // Line width */
  width?: string;
  // Line height */
  height?: string;
  // Line margin */
  margin?: string;
  // Line background color */
  color?: keyof Colors;
}

// ScLine Component is a thin line that groups content in lists and layouts.
export const Line = styled.div<LineProps>`
  background: ${({ color, theme }) => {
    if (color) {
      return theme.colors[color];
    }
    return theme.colors.lightGray;
  }};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  margin: ${({ margin }) => margin || "auto"};
`;

export const ExomeLine = Line;
