import React from "react";
import { Text } from "react-native";
import ImagePicker from "react-native-image-picker";
import { uploadImage } from "../../helpers/upload-image";

export default class UploadContainer extends React.Component {
  _showImagePicker() {
    var options = {
      title: "Select Avatar",
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
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        // console.log("response: ", response);
        uploadImage(response);
      }
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.screenProps.route_index === 2) {
      // FIXME: This is hacky screen index
      this._showImagePicker();
    }
  }

  render() {
    return <Text>This is upload screen</Text>;
  }
}
