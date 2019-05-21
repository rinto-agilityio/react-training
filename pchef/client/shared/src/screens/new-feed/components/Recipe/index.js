// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Image from '../../../../components/Image'
import Reaction from '../../../../components/Reaction'

type Props = {
  recipe: {
    title: string,
    description: string,
    imgUrl: string,
    votes: Array<number>,
  },
  size: string,
  onPress?: () => void,
  customRecipe?: {},
  customTitle?: {},
  customDescription?: {},
  customImage?: {},
}

const Recipe = ({
  recipe,
  size = 'large',
  onPress,
  customRecipe,
  customTitle,
  customDescription,
  customImage = {},
}: Props) => {
  const { title, description, imgUrl, votes } = recipe

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <View style={[styles.recipe, customRecipe]}>
        <Text
          style={[styles.title, styles[`${size}Title`], customTitle]}
          onPress={onPress}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.description,
            styles[`${size}Description`],
            customDescription,
          ]}
          onPress={onPress}
        >
          {description}
        </Text>
        <Image
          url={imgUrl}
          customImageStyle={[styles.image, styles[`${size}Image`], customImage]}
        />
      </View>
      <Reaction votes={votes} size={size} isFavorited={false} />
    </View>
  )
}

Recipe.defaultProps = {
  onPress: () => {},
  customRecipe: {},
  customTitle: {},
  customDescription: {},
  customImage: {},
}

export default Recipe