import React, { ReactElement } from "react";

import { Text } from "../Text/Text";
import { Colors } from "theme/Colors";
import { FlexContainer } from "../FlexContainer";
import { AlertWrapper } from "./AlertWrapper";

export interface AlertProps {
  // ScAlert icon element
  icon?: ReactElement;
  // The title to display
  title: string;
  // ScAlert child element
  children: ReactElement;
  // ScAlert background color, e.g.: highlightSecondary
  color?: keyof Colors;
}

// ScAlert displays a short, important message in a way that attracts the user's
// attention without interrupting the user's task.
export const Alert = (props: AlertProps) => {
  const { icon, title, children, color } = props;
  return (
    <AlertWrapper color={color}>
      {icon && (
        <FlexContainer style={{ paddingRight: 16 }}>{icon}</FlexContainer>
      )}
      <FlexContainer style={{ flexGrow: 1, paddingRight: 16 }}>
        <Text color="mediumGray">{title}</Text>
      </FlexContainer>
      <FlexContainer data-testid="alert-body">{children}</FlexContainer>
    </AlertWrapper>
  );
};

export const ExomeAlert = Alert;
