import React from "react";
import { ClearIcon } from "../../Icons/Clear/ClearIcon";
import { ExomeText } from "../Text/Text";
import { TagWrapper } from "./TagWrapper";
import {Colors} from "../../theme/Colors";

const getTagColor = (color) => color || "pureWhite";

export interface TagProps {
  // The Tag title
  title: string;
  // The text color
  textColor?: keyof Colors;
  // The Tag subtitle
  subtitle?: string;
  // Callback fired when the remove button is clicked.
  remove?: () => void;
  // backgorundColor keyof Colors
  bgColor?: keyof Colors;

  style?: React.CSSProperties;

  onClick?: () => void;
  "data-testid"?: string;
}

// Tag Component, it is used to display labels.
export const Tag = ({
  title,
  subtitle,
  remove,
  textColor,
  bgColor,
  style,
  onClick,
  ...rest
}: TagProps) => (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  <div
    data-testid={rest["data-testid"]}
    style={{ display: "inline-block" }}
    onClick={onClick}
  >
    <TagWrapper bgColor={bgColor} style={style}>
      <ExomeText
        data-testid="tag-title"
        fontSize="tiny"
        textColor={getTagColor(textColor)}
      >
        {title}
      </ExomeText>
      {subtitle && (
        <ExomeText
          data-testid="tag-subtitle"
          fontSize="tiny"
          textColor={getTagColor(textColor)}
          bold
          style={{
            marginLeft: 4,
          }}
        >
          {subtitle}
        </ExomeText>
      )}
      {remove && (
        <ClearIcon
          data-testid="tag-remove"
          width={14}
          height={14}
          transparent
          style={{ marginLeft: 5 }}
          color={getTagColor(textColor)}
          onClick={remove}
        />
      )}
    </TagWrapper>
  </div>
);

export const ExomeTag = Tag;
