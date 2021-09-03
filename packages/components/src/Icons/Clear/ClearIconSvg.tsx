import styled from "styled-components";
import {Colors} from "../../theme/Colors";

export const ClearIconSvg = styled.svg.attrs(({ theme, color }) => ({
  fill: color ? theme.colors[color] : "none",
}))<{ color?: keyof Colors }>`
  cursor: pointer;
`;
