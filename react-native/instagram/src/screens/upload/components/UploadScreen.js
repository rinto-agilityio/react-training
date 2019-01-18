// Libs
import React from 'react'
import { Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import PropTypes from 'prop-types'

// Helpers
import uploadImage from '@helpers/upload-image'

// Components
import Icon from '@common/components/Icon'

// Styles
import CommonStyles from '@themes/common'
import Icons from '@themes/icons'

class UploadScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon style={CommonStyles.tabBarIcon} source={Icons.plus} />
  }

  handleShowImagePicker = () => {
    const {
        accountData, uploadPhotoRequest, uploadPhotoCancel, uploadPhotoFailure
      } = this.props,

      /**
       * Config selection dialog on screen
       * For custom option, use customButtons, eg:
       * customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }]
       */
      options = {
        title: 'Select Photo',
        storageOptions: {
          skipBackup: true,
          path: 'images'
        }
      }

    /**
     * The first arg is the options object for customization
     * (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        uploadPhotoCancel()
      } else if (response.error) {
        uploadPhotoFailure(response.error)
      } else {
        uploadImage(response)
          .then(url => {
            // Format data before send to reducer
            const data = {
              id: Date.now(),
              likes: [],
              comments: [],
              display_url: url,
              owner: accountData
            }

            return uploadPhotoRequest(data)
          })
          .catch(error => uploadPhotoFailure(error))
      }
    })
  }

  render() {
    const { uploadData: { isUploading } } = this.props,
      ButtonTitle = isUploading ? 'Uploading images...' : 'Select images from Photo Gallery'

    return <Button onPress={this.handleShowImagePicker} title={ButtonTitle} />
  }
}

UploadScreen.propTypes = {
  uploadData: PropTypes.object.isRequired,
  accountData: PropTypes.object.isRequired,
  uploadPhotoRequest: PropTypes.func.isRequired,
  uploadPhotoCancel: PropTypes.func.isRequired,
  uploadPhotoFailure: PropTypes.func.isRequired
}

export default UploadScreen
