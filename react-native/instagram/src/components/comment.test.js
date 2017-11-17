import Comment from "./Comment";

describe("Comment component", () => {
  let component, treeSnapshot, textInput;
  const defaultState = { text: "" },
    owner = {
      profile_pic_url: "avatar_url.png"
    };

  beforeEach(() => {
    component = shallow(<Comment owner={owner} />);
    treeSnapshot = renderer.create(<Comment owner={owner} />).toJSON();

    textInput = component.find("TextInput");
  });

  it("Renders correctly", () => {
    expect(treeSnapshot).toMatchSnapshot();
  });

  it("Render default state", () => {
    expect(component.state()).toEqual(defaultState);
  });

  it("Renders input field with placeholder", () => {
    const expectedPlaceholder = "Add a comment";
    expect(textInput).toHaveLength(1);
    expect(textInput.props().placeholder).toEqual(expectedPlaceholder);
  });

  describe("When text changes", () => {
    const newTextValue = "new Text Value";

    beforeEach(() => {
      textInput.simulate("changeText", newTextValue);
    });

    it("Updates component state", () => {
      expect(component.state().text).toEqual(newTextValue);
    });

    it("Renders updated text", () => {
      expect(textInput.props().text).toEqual(newTextValue);
    });
  });
});
