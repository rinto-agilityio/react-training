// Libs
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// Styles
import styles from './styles'

// Components
import Image from '../../../../components/Image'
import Reaction from '../../../../components/Reaction'

// Helpers
import { checkFavorited } from '../../../../helpers/utils'

type Props = {
  recipe: {
    id: string,
    title: string,
    description: string,
    imgUrl: string,
    votes: Array<string>,
  },
  size?: string,
  favoriteRecipe: Array<{
    id: string,
  }>,
}

const Recipe = ({ recipe, size = 'large', favoriteRecipe }: Props) => {
  const { id, title, description, imgUrl, votes } = recipe

  const isFavorited = checkFavorited(favoriteRecipe, id)

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
      <Reaction votes={votes} size={size} isFavorited={isFavorited} />
    </TouchableOpacity>
  )
}

Recipe.defaultProps = {
  size: 'large',
}

export default Recipe
