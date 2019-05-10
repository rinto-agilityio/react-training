// Libs
import React from 'react'
import { Text } from 'react-native'

// Styles
import styles from './styles'

// Helpers
import { trim } from '../../../../helpers/utils'

type Props = {
  item: string,
  size: string,
  customDescription?: {},
}

const Ingredient = ({
  item = '',
  size = 'medium',
  customDescription,
}: Props) => (
  <Text
    style={[
      styles.descriptionIngredients,
      styles[`${size}Description`],
      customDescription,
    ]}
  >
    {trim(item)}
  </Text>
)

Ingredient.defaultProps = {
  customDescription: {},
}

export default Ingredient
