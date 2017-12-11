// Libs
import React from 'react'
import { Text, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

// Helpers
import { uploadImage } from '@helpers/upload-image'

// Components
import Icon from '@common/components/Icon'

// Styles
import CommonStyles from '@themes/common'
import Icons from '@themes/icons'

class UploadScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        style={CommonStyles.tabBarIcon}
        source={Icons.plus}
      />
    )
  }

  _showImagePicker = () => {
    this.props.uploadPhotoRequest()

    // Config selection dialog on screen
    const options = {
      title: 'Select Photo',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }], // Add custom method to select image
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        // User cancelled image picker
        this.props.uploadPhotoCancel()
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        // This is for custom method
        console.log('User tapped custom button: ', response.customButton)
      } else {
        uploadImage(response)
          .then(response => {
            // Format data before send to reducer
            const data = {
              id: Date.now(),
              likes: [],
              comments: [],
              display_url: response,
              owner: this.props.accountData
            }

            return this.props.uploadPhotoSuccess(data)
          })
          .catch(error => {
            return this.props.uploadPhotoFailure(error)
          })
      }
    })
  }

  render() {
    const ButtonTitle = this.props.uploadData.isUploading
                        ? 'Uploading images...'
                        : 'Select images from Photo Gallery'

    return <Button onPress={this._showImagePicker} title={ButtonTitle} />
  }
}

export default UploadScreen
