// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS } from '../../../../themes'

// Components
import Image from '../../../../components/Image'

type Props = {
  recipe: {
    title: string,
    description: string,
    img_url: string
  },
  size: string,
  onClick?: () => void,
  customRecipe?: {},
  customTitle?: {},
  customDescription?: {},
  customImage?: {}
}

const Recipe = ({
  recipe,
  size,
  onClick,
  customRecipe,
  customTitle,
  customDescription,
  customImage
}: Props) => {
  const {
    title,
    description,
    img_url
  } = recipe
  return (
    <View style={styles.container}>
      <View
        style={[styles.recipe, customRecipe]}
        onClick={onClick}
      >
        <Text
          style={[
            styles.title,
            styles[`${size}Title`],
            customTitle
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.description,
            styles[`${size}Description`],
            customDescription
          ]}
        >
          {description}
        </Text>
        <Image
          url={{ uri: img_url }}
          customImageStyle={[
            styles.image,
            styles[`${size}Image`],
            customImage
          ]}
        />
      </View>
    </View>
  )
}

Recipe.defaultProps = {
  onClick: () => {},
  customRecipe: {},
  customTitle: {},
  customDescription: {},
  customImage: {}
}

export default Recipe