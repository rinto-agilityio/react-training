import { Types } from "./actions";
import { REHYDRATE } from "redux-persist/lib/constants";

import { accountReducer, INITIAL_STATE } from "./reducer";

describe("Account reducer", () => {
  it("Should handle REHYDRATE", () => {
    expect(
      accountReducer(INITIAL_STATE, {
        type: REHYDRATE,
        payload: {
          account: {}
        }
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: REHYDRATE
      })
    );
  });

  it("Should handle LOAD_ACCOUNT_DATA", () => {
    // This is fixed yet
    const fixedData = {
      biography: "Personal photos",
      full_name: "Huy Nguyen",
      id: 2250323280,
      profile_pic_url:
        "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg",
      username: "huyb1991"
    };

    expect(
      accountReducer(INITIAL_STATE, {
        type: Types.LOAD_ACCOUNT_DATA
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: Types.LOAD_ACCOUNT_DATA,
        ...fixedData
      })
    );
  });
});
