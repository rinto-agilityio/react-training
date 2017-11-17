import Comment from "./Comment";

describe("Comment component", () => {
  let component, treeSnapshot;
  const defaultState = { text: "" },
    owner = {
      profile_pic_url: "avatar_url.png"
    };

  beforeEach(function() {
    component = shallow(<Comment owner={owner} />);
    treeSnapshot = renderer.create(<Comment owner={owner} />).toJSON();
  });

  it("Renders correctly", () => {
    expect(treeSnapshot).toMatchSnapshot();
  });

  it("Render default state", () => {
    expect(component.state()).toEqual(defaultState);
  });
});
