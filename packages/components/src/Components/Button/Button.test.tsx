import React from "react";
import { render } from "@testing-library/react";

import { Minimal } from "./Button.stories";
import { ButtonProps } from "./Button";

it("renders the badge with color", async () => {
  const tree = render(
    <Minimal {...(Minimal.args as ButtonProps)} disabled={false} />
  );
  expect(tree.container).toHaveTextContent("Voltar");
});

it("renders the badge with all custom props", async () => {
  const tree = render(
    <Minimal
      {...(Minimal.args as ButtonProps)}
      bgColor="mediumGray"
      disabled
      bold
      borderRadius="5px"
      size="large"
      width={250}
      padding="10px"
      border="10px"
    />
  );
  expect(tree.container).toHaveTextContent("Voltar");
});
