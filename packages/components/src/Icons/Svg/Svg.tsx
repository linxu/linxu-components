import styled from "styled-components";
import {Colors} from "../../theme/Colors";

export const Svg = styled.svg.attrs<{ color?: keyof Colors }>(
  ({ color, theme }) => ({
    fill: color ? theme.colors[color] : "none",
  })
)`
  cursor: pointer;
`;
