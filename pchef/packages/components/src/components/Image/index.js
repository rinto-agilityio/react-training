// Libs
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

// Styles
import { styles } from './styles'

const ImageComponent = ({
  disabled,
  handleTouch,
  url,
  customBtnStyle,
  customImageStyle,
  resizeMethod
}) => (
    <TouchableOpacity
      style={customBtnStyle}
      onPress={handleTouch}
      disabled={disabled}
    >
      <Image
        source={url}
        resizeMethod={resizeMethod}
        style={[styles.image, customImageStyle]}
      />
    </TouchableOpacity>
  )

ImageComponent.defaultProps = {
  disabled: false,
  customImageStyle: {},
  customBtnStyle: {},
  url: '',
  resizeMethod: 'auto',
  handleTouch: () => {}
}

export default ImageComponent