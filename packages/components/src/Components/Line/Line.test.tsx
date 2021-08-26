import React from "react";
import { render } from "@testing-library/react";

import { LineStory } from "Components/Line/Line.stories";
import { LineProps } from "Components/Line/Line";

it("renders line", async () => {
  const tree = render(
    <LineStory {...(LineStory.args as LineProps)} />
  );
  expect(tree).toMatchSnapshot();
});