import Info from "./Info";

describe("Info component", () => {
  let treeDOM;
  const data = {
    profile_pic_url: "profile.jpg",
    username: "user01",
    biography: "React-Native developer"
  };

  beforeEach(() => {
    treeDOM = renderer.create(<Info data={data} />);
  });

  it("Renders correctly", () => {
    expect(treeDOM).toMatchSnapshot();
  });
});
