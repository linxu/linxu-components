import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import { Minimal } from "./TabContainer.stories";
import { ExomeTabsProps } from "./Tabs";

it("change tab", async () => {
  const tree = render(
    <Minimal {...(Minimal.args as ExomeTabsProps)} />
  );
  const item = await screen.findByTestId("tabs-item-0");
  await fireEvent.click(item);
  expect(tree).toMatchSnapshot();
});

it("without items", async () => {
  const tree = render(
    <Minimal
      handleChangeTab={jest.fn()}
      enabledTabIndex={false}
      items={undefined}
    />
  );
  expect(tree).toMatchSnapshot();
});
