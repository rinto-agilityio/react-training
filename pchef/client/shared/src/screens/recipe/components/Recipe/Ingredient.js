// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { Text } from 'react-native'

// Styles
import styles from './styles'

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
    {item ? item.trim() : ''}
  </Text>
)

Ingredient.defaultProps = {
  customDescription: {},
}

export default memo<Props>(Ingredient)
