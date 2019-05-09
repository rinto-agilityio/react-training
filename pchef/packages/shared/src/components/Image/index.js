// Libs
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  disabled?: boolean,
  handleTouch?: () => void,
  url: string,
  customBtnStyle?: {},
  customImageStyle?: {} | Array<{}>,
  resizeMethod?: string,
}

const ImageComponent = ({
  disabled,
  handleTouch,
  url,
  customBtnStyle,
  customImageStyle,
  resizeMethod,
}: Props) => (
  <TouchableOpacity
    style={customBtnStyle}
    onPress={handleTouch}
    disabled={disabled}
  >
    <Image
      source={{ uri: url }}
      resizeMethod={resizeMethod}
      style={[styles.image, customImageStyle]}
    />
  </TouchableOpacity>
)

ImageComponent.defaultProps = {
  disabled: false,
  customImageStyle: {},
  customBtnStyle: {},
  resizeMethod: 'auto',
  handleTouch: () => {},
}

export default ImageComponent
