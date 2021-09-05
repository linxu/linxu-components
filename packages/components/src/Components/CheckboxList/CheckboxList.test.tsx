import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import {
  DefaultKeys,
  Minimal,
} from "./CheckboxList.stories";
import { CheckboxListProps } from "./CheckboxList";

it("renders", async () => {
  const tree = render(<Minimal {...(Minimal.args as CheckboxListProps)} />);
  const item = await screen.findByTestId("checkbox-list-item-1");
  await fireEvent.click(item);
  await fireEvent.click(item);
  expect(tree).toMatchSnapshot();
});
it("renders", async () => {
  const tree = render(
    <DefaultKeys {...(DefaultKeys.args as CheckboxListProps)} />
  );
  const item = await screen.findByTestId("checkbox-list-item-1");
  await fireEvent.click(item);
  expect(tree).toMatchSnapshot();
});
