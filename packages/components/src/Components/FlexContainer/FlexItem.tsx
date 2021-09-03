import styled from "styled-components";

export interface FlexItemProps {
  // The property specifies how much a flex item will grow relative to the rest of the flex items
  flexGrow?: number | string;
  // The property is define contaner max width
  maxWidth?: string;
}

/** @component */
/**
 * The direct child elements of a flex container automatically becomes flexible (flex) items
 */
export const FlexItem = styled.div<FlexItemProps>`
  flex-grow: ${({ flexGrow }) => flexGrow || 0};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
`;

export const ExomeFlexItem = FlexItem;
