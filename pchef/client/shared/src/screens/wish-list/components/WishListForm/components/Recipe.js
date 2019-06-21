// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from '../styles'

// Components
import Image from '../../../../../components/Image'

// Constants
import { DEFAULT_IMAGE } from '../../../../../constants'

type Props = {
  recipe: {
    title: string,
    imgUrl: string,
  },
  size?: string,  
}

const Recipe = ({
  recipe,
  size = 'large',
}: Props) => {
  const { title, imgUrl } = recipe

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <View style={styles.recipe}>
        <Text
          style={[styles.title, styles[`${size}Title`]]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          { title }
        </Text>
        <Image
          url={imgUrl || DEFAULT_IMAGE}
          customImageStyle={[styles.image, styles[`${size}Image`]]}
        />
      </View>
    </View>
  )
}

export default Recipe
