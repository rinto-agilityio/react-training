import React from "react";
import { Text, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ImagePicker from "react-native-image-picker";

import { Creators as UploadActionCreators } from "./actions";
import { uploadImage } from "../../helpers/upload-image";

class UploadContainer extends React.Component {
  _showImagePicker = () => {
    this.props.uploadPhotoRequest();

    var options = {
      title: "Select Photo",
      customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
        this.props.uploadPhotoCancel();
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // console.log("response: ", response);
        uploadImage(response)
          .then(response => {
            const data = {
              id: 1646667310423083823,
              like: 0,
              comments: [],
              display_url: response.downloadURL,
              owner: this.props.accountData
            };

            return this.props.uploadPhotoSuccess(data);
          })
          .catch(error => {
            return this.props.uploadPhotoFailure(error);
          });
      }
    });
  };

  render() {
    const { uploadData } = this.props;

    return uploadData.isUploading ? (
      <Text>Uploading images...</Text>
    ) : (
      <Button
        onPress={this._showImagePicker}
        title="Select images from Photo Gallery"
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...UploadActionCreators
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    uploadData: state.upload,
    accountData: state.account
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
