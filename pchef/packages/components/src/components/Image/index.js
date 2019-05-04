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
  customImageStyle
}) => (
    <TouchableOpacity
      style={customBtnStyle}
      onPress={handleTouch}
      disabled={disabled}
    >
      <Image
        source={url}
        resizeMethod="resize"
        style={[styles.image, customImageStyle]}
      />
    </TouchableOpacity>
  )

ImageComponent.defaultProps = {
  disabled: false,
  customImageStyle: {},
  customBtnStyle: {},
  handleTouch: () => { },
  url: ''
}

export default ImageComponent