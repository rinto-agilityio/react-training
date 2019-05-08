// Libs
import * as React from 'react'
import { ImageBackground } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  url: string,
  customImageBg?: {},
  children: React.Node,
  resizeMode?: string
}

const ImageBgComponent = ({
  url,
  customImageBg,
  children,
  resizeMode
}: Props) => (
  <ImageBackground
    source={{ uri: url }}
    style={[styles.imageBg, customImageBg]}
    resizeMode={resizeMode}
  >
    {children}
  </ImageBackground>
)

ImageBgComponent.defaultProps = {
  customImageBg: {},
  resizeMode: ''
}

export default ImageBgComponent
