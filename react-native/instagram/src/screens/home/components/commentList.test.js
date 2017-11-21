import CommentList from "./CommentList";

const comments = [
  {
    id: 1,
    text: "First comment",
    owner: {
      username: "user1"
    },
    id: 2,
    text: "Second comment",
    owner: {
      username: "user2"
    }
  }
];

describe("CommentList component", () => {
  it("CommentList renders correctly", () => {
    const treeDOM = renderer
      .create(<CommentList comments={comments} />)
      .toJSON();

    expect(treeDOM).toMatchSnapshot();
  });
});
