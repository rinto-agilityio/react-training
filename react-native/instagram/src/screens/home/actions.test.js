import { Types, Creators } from "./actions";

import { comments } from "../../test/__mocks__/sample-data";

describe("Home actions", () => {
  const mockComment = comments[0];

  it("Return correct action type for getHomeDataRequest", () => {
    const expectAction = { type: Types.GET_HOME_DATA_REQUEST };

    expect(Creators.getHomeDataRequest()).toEqual(expectAction);
  });

  it("Return correct action type and comment for addComment", () => {
    const comment = {
      postId: mockComment.postId,
      owner: mockComment.owner,
      text: mockComment.text
    };

    const expectAction = {
      type: Types.ADD_COMMENT,
      comment: comment
    };

    expect(Creators.addComment(comment)).toEqual(expectAction);
  });

  it("Return correct action type and data for toogleLike", () => {
    const data = {
      postId: mockComment.postId,
      userId: mockComment.owner.id
    };
    const expectAction = {
      type: Types.TOOGLE_LIKE,
      data: data
    };

    expect(Creators.toogleLike(data)).toEqual(expectAction);
  });
});
