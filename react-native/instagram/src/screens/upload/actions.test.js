import { Types, Creators } from "./actions";

describe("Upload action", () => {
  it("Return correct action type for uploadPhotoRequest", () => {
    const expectAction = { type: Types.UPLOAD_PHOTO_REQUEST };

    expect(Creators.uploadPhotoRequest()).toEqual(expectAction);
  });

  it("Return correct action type for uploadPhotoCancel", () => {
    const expectAction = { type: Types.UPLOAD_PHOTO_CANCEL };

    expect(Creators.uploadPhotoCancel()).toEqual(expectAction);
  });

  it("Return correct action type for uploadPhotoSuccess", () => {
    const response = { downloadUrl: "download_image_url" };
    const expectAction = {
      type: Types.UPLOAD_PHOTO_SUCCESS,
      response: response
    };

    expect(Creators.uploadPhotoSuccess(response)).toEqual(expectAction);
  });

  it("Return correct action type for uploadPhotoFailure", () => {
    const error = { message: "Upload failed" };
    const expectAction = {
      type: Types.UPLOAD_PHOTO_FAILURE,
      error: error
    };

    expect(Creators.uploadPhotoFailure(error)).toEqual(expectAction);
  });
});
