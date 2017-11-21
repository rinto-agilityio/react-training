import Photos from "./Photos";

describe("Photos component", () => {
  let component, treeDOM;
  const data = [
    {
      display_url: "image01.jpg"
    },
    {
      display_url: "image02.jpg"
    },
    {
      display_url: "image03.jpg"
    }
  ];

  beforeEach(() => {
    treeDOM = renderer.create(<Photos data={data} />).toJSON();
    component = shallow(<Photos data={data} />);
  });

  it("Renders correctly", () => {
    expect(treeDOM).toMatchSnapshot();
  });
});
