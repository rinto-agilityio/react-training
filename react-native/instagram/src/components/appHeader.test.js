import AppHeader from "./AppHeader";

describe("AppHeader component", () => {
  it("AppHeader renders correctly", () => {
    const tree = renderer.create(<AppHeader />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
