import React from "react";
import { render } from "@testing-library/react";
import { ExomeProvider, getTheme } from "../../theme/getTheme";
import { ClearIcon } from "./ClearIcon";

describe("ClearIcon", () => {
  it("renders", () => {
    const tree = render(<ClearIcon />);
    expect(tree).toMatchSnapshot();
  });
  it("color props", async () => {
    const tree = render(
      <ExomeProvider>
        <ClearIcon color="lightGray" data-testid="clear" />
      </ExomeProvider>
    );
    const actual = await tree.findByTestId("clear");
    expect(actual.getAttribute("fill")).toBe(getTheme().colors.lightGray);
    expect(tree).toMatchSnapshot();
  });
});
