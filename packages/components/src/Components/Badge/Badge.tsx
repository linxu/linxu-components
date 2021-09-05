import React from "react";
import styled from "styled-components";
import {Colors} from "../../theme/Colors";

export interface BadgeProps {
  // The title to display
  title: string;
  // The title text color, e.g.: pureWhite
  color?: keyof Colors;
  // Badge background color, e.g.: primary
  bgColor?: keyof Colors;
  // Badge padding, e.g.: 2px 4px
  padding?: string;
  // Badge radius, e.g.: 2px
  radius?: string;
  style?: object;
}

export const BadgeWrapper = styled(({ title, bgColor, ...props }) => (
  <div {...props}>{title}</div>
))<BadgeProps>`
  ${({ theme }) => theme.typography.fontSize.tiny}
  color: ${({ color, theme }) => {
    if (color) {
      return theme.colors[color];
    }
    return theme.colors.pureWhite;
  }};
  background: ${({ bgColor, theme }) => {
    if (bgColor) {
      return theme.colors[bgColor];
    }
    return theme.colors.primary;
  }};
  padding: ${({ padding }) => padding || "2px 4px"};
  border-radius: ${({ radius }) => radius || "2px"};
`;

// ScBadge is used for important text prompts, usually displayed in the top-right of a component
export const Badge = ({
  title,
  bgColor,
  padding,
  radius,
  color,
  ...props
}: BadgeProps): React.ReactElement => (
  <BadgeWrapper
    data-testid="badge"
    title={title}
    bgColor={bgColor}
    color={color}
    padding={padding}
    radius={radius}
    {...props}
  >
    {title}
  </BadgeWrapper>
);

export const ExomeBadge = Badge;
