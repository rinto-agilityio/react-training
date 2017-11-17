import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Comment from "./Comment";

// Mocking props
const owner = {
  profile_pic_url: "avatar_url.png"
};

test("Comment renders correctly", () => {
  const tree = renderer.create(<Comment owner={owner} />).toJSON();

  expect(tree).toMatchSnapshot();
});
