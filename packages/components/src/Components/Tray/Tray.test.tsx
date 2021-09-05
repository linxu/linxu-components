import React from "react";
import { render } from "@testing-library/react";
import { Tray } from "./Tray";

it("render Tray", async () => {
  const tree = render(
    <Tray open anchor="left" onClose={jest.fn()}>
      <h4>Test</h4>
    </Tray>
  );
  expect(tree).toMatchSnapshot();
});
