import React from "react";
import { render } from "@testing-library/react";

import { LineStory } from "./Line.stories";
import { LineProps } from "./Line";

it("renders line", async () => {
  const tree = render(
    <LineStory {...(LineStory.args as LineProps)} />
  );
  expect(tree).toMatchSnapshot();
});