import styled from "styled-components";
import { FlexContainer } from "Components/FlexContainer";
import {Colors} from "../../theme/Colors";

interface TagWrapperProps {
  bgColor?: keyof Colors;
}

export const TagWrapper = styled(FlexContainer)<TagWrapperProps>`
  background: ${({ bgColor, theme }) => {
    if (bgColor) {
      return theme.colors[bgColor];
    }
    return theme.colors.mediumGray;
  }};
  padding: 5px 8px;
  border-radius: 1px;
  align-items: center;
`;
