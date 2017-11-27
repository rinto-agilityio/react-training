import { photos } from "../../../test/__mocks__/sample-data";
import SinglePhoto from "./SinglePhoto";

describe("SinglePhoto component", () => {
  const item = photos[0];

  beforeEach(() => {
    const component = shallow(<SinglePhoto item={item} />);
  });

  it("Renders correctly without like", () => {
    const treeDOM = renderer.create(<SinglePhoto item={item} />).toJSON();

    expect(treeDOM).toMatchSnapshot();
  });

  it("Renders correctly like photo", () => {
    const item2 = {
      id: 1,
      display_url: "",
      comments: [],
      likes: [123, 456],
      owner: {
        id: 123,
        profile_pic_url: "profile.jpg",
        username: "user01",
        biography: "React-Native developer"
      }
    };
    const treeDOM = renderer.create(<SinglePhoto item={item2} />).toJSON();

    expect(treeDOM).toMatchSnapshot();
  });
});
