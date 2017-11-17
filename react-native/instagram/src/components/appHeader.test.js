import AppHeader from "./AppHeader";

test("AppHeader renders correctly", () => {
  const tree = renderer.create(<AppHeader />).toJSON();

  expect(tree).toMatchSnapshot();
});
