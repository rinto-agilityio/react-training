import { users } from "../../../test/__mocks__/sample-data";
import Info from "./Info";

describe("Info component", () => {
  let treeDOM;

  beforeEach(() => {
    treeDOM = renderer.create(<Info data={users[0]} />);
  });

  it("Renders correctly", () => {
    expect(treeDOM).toMatchSnapshot();
  });
});
