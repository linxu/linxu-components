import React from "react";
import { render } from "@testing-library/react";

import { ClearIcon } from "./ClearIcon";

it("renders", async () => {
  const tree = render(<ClearIcon />);
  expect(tree).toMatchSnapshot();
});
