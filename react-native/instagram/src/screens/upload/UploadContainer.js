// Libs
import React from 'react'
import { Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ImagePicker from 'react-native-image-picker'

// Helpers
import { uploadImage } from '@helpers/upload-image'
import { Creators as UploadActionCreators } from './actions'

// Components
import Icon from '@common/components/Icon'

// Styles
import CommonStyles from '@themes/common'

class UploadContainer extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        style={CommonStyles.tabBarIcon}
        source={require('@assets/icons/plus.png')}
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
      console.log('Response = ', response)

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
    const { uploadData } = this.props
    const ButtonTitle = uploadData.isUploading
      ? 'Uploading images...'
      : 'Select images from Photo Gallery'

    return <Button onPress={this._showImagePicker} title={ButtonTitle} />
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...UploadActionCreators
    },
    dispatch
  )
}

const mapStateToProps = state => {
  return {
    uploadData: state.upload,
    accountData: state.account
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer)
