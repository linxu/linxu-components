import React from "react";
import { render } from "@testing-library/react";

import { Minimal } from "./Checkbox.stories";
import { CheckboxProps } from "./Checkbox";

it("renders the badge with color", async () => {
  const tree = render(
    <Minimal {...(Minimal.args as CheckboxProps)} checked={false} />
  );
  expect(tree).toMatchSnapshot();
});
