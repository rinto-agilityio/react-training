import { photos } from "../../../test/__mocks__/sample-data";
import Photos from "./Photos";

describe("Photos component", () => {
  let component, treeDOM;

  beforeEach(() => {
    treeDOM = renderer.create(<Photos data={photos} />).toJSON();
    component = shallow(<Photos data={photos} />);
  });

  it("Renders correctly", () => {
    expect(treeDOM).toMatchSnapshot();
  });
});
