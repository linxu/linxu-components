import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from "../Checkbox/Checkbox";
import { Text } from "../Text/Text";

type Data = { id: number } & any;

export interface CheckboxListProps {
  /** data source, e.g.: {name: "test", summary: 1} */
  data: Data[];
  /** Callback fired when the ScCheckbox is changed */
  // eslint-disable-next-line no-unused-vars
  onChecked: (_: number[]) => void;
  /** name key from data */
  nameKey: string;
  /** summary key from data */
  summaryKey: string;
}

// CheckboxList Component, it is a simple Checkbox List.
export const CheckboxList = ({
  data = [],
  nameKey = "name",
  summaryKey = "summary",
  onChecked,
}: CheckboxListProps) => {
  const [checked, setChecked] = useState<number[]>([]);

  return (
    <List>
      {data.map((item, index) => (
        <ListItem
          key={item.id}
          data-testid={`checkbox-list-item-${index + 1}`}
          dense
          button
          divider
          onClick={() => {
            const currentIndex = checked.indexOf(item.id);
            const newChecked = [...checked];
            if (currentIndex === -1) {
              newChecked.push(item.id);
            } else {
              newChecked.splice(currentIndex, 1);
            }
            setChecked(newChecked);
            if (onChecked) {
              onChecked(newChecked);
            }
          }}
          style={{ paddingLeft: 0 }}
        >
          <ListItemIcon style={{ minWidth: 0 }}>
            <Checkbox checked={checked.indexOf(item.id) !== -1} />
          </ListItemIcon>
          <ListItemText>
            <Text fontSize="medium">{item[nameKey]}</Text>
          </ListItemText>
          {item[summaryKey] && (
            <Text fontSize="medium">{item[summaryKey]}</Text>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export const ExomeCheckboxList = CheckboxList;
