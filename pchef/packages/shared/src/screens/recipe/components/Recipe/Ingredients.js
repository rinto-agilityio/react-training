// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Helpers
import { formatStringToArray } from '../../../../helpers/utils'
import Ingredient from './Ingredient'

type Props = {
  description: string,
  size: string,
  customIngredients?: {},
  customTitle?: {},
}

const Ingredients = ({
  description = '',
  size = 'medium',
  customIngredients,
  customTitle,
}: Props) => {
  const ingredients = formatStringToArray(description)

  return (
    <View
      style={[
        styles.ingredients,
        styles[`${size}Ingredients`],
        customIngredients,
      ]}
    >
      <Text
        style={[
          styles.title,
          styles[`${size}Title`],
          customTitle,
        ]}
      >
        What you will need
      </Text>
      {ingredients.map((item, index) => (
        <Ingredient
          item={item}
          key={`${item}_${index}`}
          size={size}
        />
      ))}
    </View>
  )
}

Ingredients.defaultProps = {
  customIngredients: {},
  customTitle: {},
}

export default Ingredients
