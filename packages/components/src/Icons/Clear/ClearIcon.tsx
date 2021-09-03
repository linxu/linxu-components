import React, { MouseEventHandler } from "react";
import { ClearIconSvg } from "./ClearIconSvg";
import {Colors} from "../../theme/Colors";

export interface ClearIconProps {
  width?: string | number;
  height?: string | number;
  transparent?: boolean;
  style?: React.CSSProperties;
  color?: keyof Colors;
  onClick?: MouseEventHandler | undefined;
  "data-testid"?: string;
}

export const ClearIcon = ({
  transparent,
  width,
  height,
  style,
  color,
  onClick,
  ...rest
}: ClearIconProps & any) => (
  <ClearIconSvg
    width={width || "24"}
    height={height || "24"}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
    color={color}
    onClick={onClick}
    data-testid={rest["data-testid"]}
    {...rest}
  >
    {!transparent && <circle cx="10" cy="10" r="10" fill="white" />}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM7.75732 9.17163L9.17154 7.75742L12 10.5858L14.8284 7.75742L16.2426 9.17163L13.4142 12.0001L16.2426 14.8285L14.8284 16.2427L12 13.4143L9.17154 16.2427L7.75732 14.8285L10.5858 12.0001L7.75732 9.17163Z"
    />
  </ClearIconSvg>
);
