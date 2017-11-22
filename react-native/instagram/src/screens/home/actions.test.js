import { Types, Creators } from "./actions";

describe("Home actions", () => {
  it("Return correct action type for getHomeDataRequest", () => {
    const expectAction = { type: Types.GET_HOME_DATA_REQUEST };

    expect(Creators.getHomeDataRequest()).toEqual(expectAction);
  });

  it("Return correct action type and comment for addComment", () => {
    const comment = {
      postId: 1,
      owner: {},
      text: "My comment"
    };

    const expectAction = {
      type: Types.ADD_COMMENT,
      comment: comment
    };

    expect(Creators.addComment(comment)).toEqual(expectAction);
  });

  it("Return correct action type and data for toogleLike", () => {
    const data = {
      postId: 1,
      userId: 10
    };
    const expectAction = {
      type: Types.TOOGLE_LIKE,
      data: data
    };

    expect(Creators.toogleLike(data)).toEqual(expectAction);
  });
});
