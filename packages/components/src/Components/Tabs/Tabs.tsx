import React, { useEffect, useState } from "react";
import { TabsContainer } from "./TabsContainer";
import { TabContainer } from "./TabContainer";

interface TabModel {
  label: string;
  width: number;
  icon?: React.ReactElement;
}

export interface ExomeTabsProps {
  // Callback fired when the tab is selected
  handleChangeTab: (tab: number) => void;
  // Set child tab data,
  // e.g.: [{label: "Data", width: 100, icon: icon}, {label: "Events", width: 100, icon: icon}]
  items?: TabModel[];
  // Selected tab index
  tabIndex?: number;
  enabledTabIndex?: boolean;
}

// Tabs make it easy to explore and switch between different views. <br>
// Other Props Reference https://material-ui.com/api/tabs/
export const Tabs = ({
  handleChangeTab,
  items,
  tabIndex = 0,
  enabledTabIndex = true,
}: ExomeTabsProps) => {
  const [tabWidth, setTabWidth] = useState<string | number | undefined>(
    items ? items[tabIndex].width : "auto"
  );
  const [tabValue, setTabValue] = useState(0);
  const [tabLeft, setTabLeft] = useState(0);
  useEffect(() => {
    if (enabledTabIndex) {
      let offset = 0;
      if (items) {
        items.forEach((item, idx) => {
          if (idx < tabIndex) {
            if (item.width) {
              offset += item.width;
            }
          }
        });
        setTabLeft(offset);
      }
    }
  }, [tabIndex]);

  useEffect(() => {
    if (!enabledTabIndex) {
      let offset = 0;
      if (items) {
        items.forEach((item, idx) => {
          if (idx < tabValue) {
            if (item.width) {
              offset += item.width;
            }
          }
        });
        setTabLeft(offset);
      }
    }
  }, [tabValue]);

  return (
    <TabsContainer
      value={enabledTabIndex ? tabIndex : tabValue}
      tabLeft={tabLeft}
      tabWidth={tabWidth}
      onChange={(event, value) => {
        setTabWidth(items!![value].width);
        setTabValue(value);
        handleChangeTab(value);
      }}
    >
      {(items || []).map((item, index) => (
        <TabContainer
          data-testid={`tabs-item-${index}`}
          key={item.label}
          disableRipple
          label={item.label}
          width={item.width}
          icon={item.icon}
        />
      ))}
    </TabsContainer>
  );
};

export const ExomeTabs = Tabs;
