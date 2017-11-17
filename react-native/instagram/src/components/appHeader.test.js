import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import AppHeader from "./AppHeader";

test("AppHeader renders correctly", () => {
  const tree = renderer.create(<AppHeader />).toJSON();

  expect(tree).toMatchSnapshot();
});
