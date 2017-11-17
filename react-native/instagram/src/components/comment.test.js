import Comment from "./Comment";

// Mocking props
const owner = {
  profile_pic_url: "avatar_url.png"
};

describe("Comment component", () => {
  it("Renders correctly", () => {
    const tree = renderer.create(<Comment owner={owner} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Comment call function when click", () => {
    const defaultState = { text: "" };

    const submitComment = jest.fn();
    const wrapper = shallow(
      <Comment owner={owner} submitComment={submitComment} />
    );

    expect(wrapper.state()).toEqual(defaultState);
  });
});
