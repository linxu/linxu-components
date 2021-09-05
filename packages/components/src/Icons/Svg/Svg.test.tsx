import React from "react";
import { render } from "@testing-library/react";

import { Svg } from "./Svg";

it("renders Svg without color", async () => {
  const tree = render(
    <Svg color={undefined}>
      <svg>path</svg>
    </Svg>
  );
  expect(tree).toMatchSnapshot();
});
