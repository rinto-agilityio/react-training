import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Comment from "./Comment";

Enzyme.configure({ adapter: new Adapter() });

// Mocking props
const owner = {
  profile_pic_url: "avatar_url.png"
};

test("Comment renders correctly", () => {
  const tree = renderer.create(<Comment owner={owner} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("Comment call function when click", () => {
  const defaultState = { text: "" };

  const submitComment = jest.fn();
  const wrapper = shallow(
    <Comment owner={owner} submitComment={submitComment} />
  );

  expect(wrapper.state()).toEqual(defaultState);
});
