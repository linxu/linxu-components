import React from "react";
import styled, { css, Themer } from "styled-components";
import MUIButton, {
  ButtonProps as MaterialButtonProps,
} from "@material-ui/core/Button";
import { buttonSizes } from "./ButtonSizes";
import { Colors } from "../../theme/Colors";

export interface ButtonProps extends MaterialButtonProps {
  // Button width, e.g.: auto */
  width?: number | string;
  // Button label color */
  textColor?: keyof Colors;
  // Button whether the font is bold */
  bgColor?: keyof Colors;
  // Button whether the font is bold */
  bold?: boolean;
  // Button border radius */
  borderRadius?: string;
  // Button border style */
  border?: string;
  // Button padding */
  padding?: string;
}

// Button Component <br>
// Other ButtonProps Reference https://material-ui.com/zh/api/button/
// color prop migrated to background prop
export const Button = styled(
  ({
    bgColor,
    borderRadius,
    bold,
    padding,
    width,
    border,
    textColor,
    ...other
  }: ButtonProps) => <MUIButton {...other} />
)`
  &.MuiButton-root {
    text-transform: capitalize;
    background-color: ${({ bgColor = "lightGrey", disabled, theme }) => {
      if (disabled) {
        return theme.colors.lightGray;
      }
      return theme.colors[bgColor];
    }};
    font-family: ${({ theme }) => theme.typography.main};
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    ${({ size }) => (size ? buttonSizes[size] : buttonSizes.medium)};
    text-decoration: none;
    ${({ bold }: Themer<ButtonProps>) => {
      if (bold) {
        return css`
          font-weight: bold;
        `;
      }
      return css``;
    }};
    border-radius: ${({ borderRadius = "1px" }) => borderRadius};
    border: ${({ theme, bgColor, color }: Themer<ButtonProps>) => {
      if (bgColor || color) {
        return "none";
      }
      return `solid 1px ${theme.colors.black}`;
    }};

    &:hover {
      background: ${({ bgColor, theme }: Themer<ButtonProps>) => {
        if (!bgColor) {
          return "unset";
        }
        return theme.colors[bgColor] || theme.colors.black;
      }};
      opacity: 0.5;
    }

    width: ${({ width }: Themer<ButtonProps>) => {
      if (width) {
        return `${width}px`;
      }
      return "auto";
    }};
    ${({ padding }: Themer<ButtonProps>) =>
      padding &&
      css`
        padding: ${padding};
      `};
    ${({ border }: Themer<ButtonProps>) =>
      border &&
      css`
        border: ${border};
      `};
  }

  & .MuiButton-label {
    color: ${({ theme, disabled, textColor }: Themer<ButtonProps>) => {
      if (textColor) {
        return theme.colors[textColor];
      }
      if (disabled) {
        return theme.colors.lightGray;
      }
      return theme.colors.black;
    }};
  }
`;

export const ExomeButton = Button;
