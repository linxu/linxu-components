import styled, { css, Themer } from "styled-components";
import {FontSize} from "../../theme/BaseTheme";
import {Colors} from "../../theme/Colors";

export interface TextProps {
  // text font size, e.g.: tiny
  fontSize?: keyof FontSize;
  // text color, e.g.: black
  textColor?: keyof Colors;
  // Defines thick characters
  bold?: boolean;
  // Specifies that a line will be displayed under the text
  underline?: boolean;
  // The cursor is a pointer
  cursorMouse?: boolean;
  // html element type
  element?: string;
}

// ScText is display text component
export const Text = styled.p.attrs<TextProps>((props) => ({
  as: props.element ? props.element : "p",
}))<TextProps>`
  ${({ fontSize, theme }: Themer<TextProps>) => {
    if (fontSize) {
      return theme.typography.fontSize[fontSize];
    }
    return theme.typography.fontSize.tiny;
  }};
  color: ${({ textColor, theme }: Themer<TextProps>) => {
    const defaultColor = theme.colors.black;
    return textColor ? theme.colors[textColor] || defaultColor : defaultColor;
  }};
  font-family: ${({ theme }: Themer<TextProps>) => theme.typography.main};
  ${({ bold }: Themer<TextProps>) =>
    bold &&
    css`
      font-weight: bold;
    `};
  ${({ underline }: Themer<TextProps>) =>
    underline &&
    css`
      text-decoration: underline;
    `};
  cursor: ${({ cursorMouse }: Themer<TextProps>) => {
    if (!cursorMouse) {
      return "unset";
    }
    return "pointer";
  }};
  margin: 0;
  padding: 0;
  display: inline-block;
  word-wrap: break-word;
`;

export const ExomeText = Text;
