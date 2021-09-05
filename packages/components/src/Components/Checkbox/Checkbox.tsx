import React from "react";
import styled from "styled-components";
import MUICheckbox from "@material-ui/core/Checkbox";
import { CheckboxIcon } from "./CheckboxIcon";

export interface CheckboxProps {
  // If true, the component is checked */
  checked: boolean;
  // Callback fired when the state is changed */
  onChange: () => void;
}

// ScCheckbox Component <br>
// Other Props Reference https://material-ui.com/zh/api/checkbox/
export const Checkbox = styled(MUICheckbox).attrs<CheckboxProps>(() => ({
  icon: <CheckboxIcon checked={false} color="secondary" />,
  checkedIcon: <CheckboxIcon checked color="success" />,
}))``;

export const ExomeCheckbox = Checkbox;
