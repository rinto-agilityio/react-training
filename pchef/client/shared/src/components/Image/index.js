// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, useEffect, memo, Suspense } from 'react'
import { Image as ImageNative, TouchableOpacity } from 'react-native'
import ImageLoad from 'react-native-image-placeholder'

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
      <ImageLoad
        resizeMode={resizeMethod}
        style={[styles.image, customImageStyle]}
        loadingStyle={{ size: 'large', color: 'blue' }}
        source={{
          uri: url,
        }}
      />
    </TouchableOpacity>
  </Suspense>
)

export default memo<Props>(ImageComponent)
