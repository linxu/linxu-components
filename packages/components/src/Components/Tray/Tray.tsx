import React from "react";
import { Drawer } from "@material-ui/core";

export interface TrayProps {
  // Side from which the Tray will appear anchor: top | bottom | left | right */
  anchor: "left" | "top" | "right" | "bottom";
  // The duration for the transition, in milliseconds */
  transitionDuration?: number;
  // The contents of the Tray */
  children: React.ReactElement;
  // If true, the Tray is open. */
  open: boolean;
  // Callback fired when the component requests to be closed */
  onClose: () => void;
}

// Tray are anchored to the top | bottom | left | right of the screen. <br>
// Other Props Reference https://material-ui.com/api/drawer/
export const Tray = (props: TrayProps) => {
  const { anchor, open, transitionDuration, onClose, children } = props;
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      transitionDuration={transitionDuration || 300}
    >
      {children}
    </Drawer>
  );
};
export const ExomeTray = Tray;
