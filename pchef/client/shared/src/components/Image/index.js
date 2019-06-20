// Libs
import React, { useState, useEffect, memo, Suspense } from 'react'
import { Image as ImageNative, TouchableOpacity } from 'react-native'

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
  thumbnail?: string
}

const placeholderImage = require('../../assets/images/placeholder.jpg')

const ImageComponent = ({
  url,
  thumbnail,
  disabled = false,
  customImageStyle,
  customBtnStyle = {},
  resizeMethod = 'auto',
  handleTouch = () => {},
}: Props) => {
  const [loadImg, setLoadImg] = useState({
    url: thumbnail || placeholderImage,
    loaded: false,
  })

  useEffect(() => {
    const imgLoader = new Image()

    imgLoader.onload = () => {
      setLoadImg({
        url: imgLoader.src,
        loaded: true,
      })
    }

    imgLoader.src = url
      ? url
      : placeholderImage

    return () => setLoadImg({ url, loaded: false })
  }, [url])

  return (
    <Suspense fallback={<Loading size="small" />}>
      <TouchableOpacity
        style={customBtnStyle}
        onPress={handleTouch}
        disabled={disabled}
      >
        <ImageNative
          source={{ uri: loadImg.url }}
          resizeMethod={resizeMethod}
          style={[styles.image, customImageStyle]}
        />
      </TouchableOpacity>
    </Suspense>
  )
}

export default memo(ImageComponent)
