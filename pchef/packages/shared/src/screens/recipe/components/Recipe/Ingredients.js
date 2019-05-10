// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Helpers
import { formatStringToArray, trim } from '../../../../helpers/utils'

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
        <Text
          style={[
            styles.descriptionIngredients,
            styles[`${size}Description`],
            customDescription,
          ]}
          key={`${item}_${index}`}
        >
          {trim(item)}
        </Text>
      ))}
    </View>
  )
}

Ingredients.defaultProps = {
  customIngredients: {},
  customTitle: {},
  customDescription: {},
}

export default Ingredients
