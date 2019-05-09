// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

type Props = {
  description: string,
  size: string,
  customIngredients?: {},
  customTitle?: {},
  customDescription?: {},
}

const Ingredients = ({
  description = '',
  size = 'medium',
  customIngredients,
  customTitle,
  customDescription,
}: Props) => (
  <View
    style={[
      styles.ingredients,
      styles[`${size}Ingredients`],
      customIngredients,
    ]}
  >
    <Text
      style={[
        styles.titleIngredients,
        styles[`${size}Title`],
        customTitle,
      ]}
    >
      What you will need
    </Text>
    <Text
      style={[
        styles.description,
        styles[`${size}Description`],
        customDescription,
      ]}
    >
      {description}
    </Text>
  </View>
)

Ingredients.defaultProps = {
  customIngredients: {},
  customTitle: {},
  customDescription: {},
}

export default Ingredients
