// Libs
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// Styles
import styles from './styles'

// Components
import Image from '../../../../components/Image'
import Reaction from '../../../../components/Reaction'

type Props = {
  recipe: {
    id: string,
    title: string,
    description: string,
    imgUrl: string,
    votes: Array<number>,
  },
  size?: string,
}

const Recipe = ({ recipe, size = 'large' }: Props) => {
  const { title, description, imgUrl, votes } = recipe

  return (
    <TouchableOpacity style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <View style={styles.recipe}>
        <Text
          style={[styles.title, styles[`${size}Title`]]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Text
          style={[styles.description, styles[`${size}Description`]]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
        <Image
          url={imgUrl}
          customImageStyle={[styles.image, styles[`${size}Image`]]}
        />
      </View>
      <Reaction votes={votes} size={size} isFavorited={false} />
    </TouchableOpacity>
  )
}

Recipe.defaultProps = {
  size: 'large',
}

export default Recipe
