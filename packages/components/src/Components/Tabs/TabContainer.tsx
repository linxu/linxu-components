import styled from "styled-components";
import { Tab, TabProps } from "@material-ui/core";

export const TabContainer = styled(Tab).attrs((props) => ({
  "data-testid": props["data-testid"],
  classes: {
    root: "tab-container",
    selected: "tab-selected",
    wrapper: "tab-icon-label-container",
  },
}))<TabProps & { width?: string | number }>`
  &.tab-container {
    font-family: ${({ theme }) => theme.typography.main};
    ${({ theme }) => theme.typography.fontSize.medium}
    color: ${({ theme }) => theme.colors.mediumGray};
    font-weight: bold;
    text-transform: capitalize;
    min-width: 88px;
    min-height: 40px;
    padding: 0px;
    width: ${({ width }) => (width ? `${width}px` : "auto")};
  }
  &.tab-selected {
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.highlightPrimary};
    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
  .tab-icon-label-container {
    flex-direction: row;
    align-items: center;
  }
  svg {
    margin-right: 5px;
    margin-bottom: 0px !important;
  }
  padding: 0px;
  width: auto;
`;
