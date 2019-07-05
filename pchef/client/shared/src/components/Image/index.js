// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo, Suspense } from 'react'
import { View, Image as ImageNative, TouchableOpacity } from 'react-native'

// Styles
import styles from './styles'

// Components
import Loading from '../Loading'

type Props = {
  disabled?: boolean,
  handleTouch?: () => void,
  url: string,
  customBtnStyle?: {},
  customImageStyle?: {} | Array<{}>,
  resizeMethod?: string,
}

const ImageComponent = ({
  url,
  disabled = false,
  customImageStyle,
  customBtnStyle = {},
  resizeMethod = 'cover',
  handleTouch = () => {},
}: Props) => (
  <Suspense fallback={<Loading size="small" />}>
    <TouchableOpacity
      style={customBtnStyle}
      onPress={handleTouch}
      disabled={disabled}
    >
      <View style={[styles.imageWrapper, customImageStyle]}>
        <ImageNative
          source={{ uri: url }}
          style={[styles.image]}
          resizeMode={resizeMethod}
        />
      </View>
    </TouchableOpacity>
  </Suspense>
)

export default memo<Props>(ImageComponent)
