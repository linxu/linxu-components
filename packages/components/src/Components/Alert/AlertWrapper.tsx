import styled, { Themer } from "styled-components";
import { FlexContainer } from "../FlexContainer";

interface Props {
  color?: string;
}

export const AlertWrapper = styled(FlexContainer)<Props>`
  background: ${({ color, theme }: Themer<Props>) => {
    if (color) {
      return theme.colors[color];
    }
    return theme.colors.highlightSecondary;
  }};
  border: 1px solid ${({ theme }: Themer<Props>) => theme.colors.lightGray};
  padding: 0 16px;
  align-items: center;
`;
