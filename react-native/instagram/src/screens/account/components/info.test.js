import { user } from "../../../test/__mocks__/sample-data";
import Info from "./Info";

describe("Info component", () => {
  let treeDOM;

  beforeEach(() => {
    treeDOM = renderer.create(<Info data={user} />);
  });

  it("Renders correctly", () => {
    expect(treeDOM).toMatchSnapshot();
  });
});
