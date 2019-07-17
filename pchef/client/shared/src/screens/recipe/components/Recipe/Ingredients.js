// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Helpers
import { formatStringToArray } from '../../../../helpers/utils'

// Constants
import { SEPARATOR_SPLIT_STRING } from '../../../../constants'

// Components
import Ingredient from './Ingredient'
import Wrapper from '../../../../layout/Wrapper'

type Props = {
  description: string,
  size: string,
  customIngredients?: {},
  customTitle?: {},
  onClose?: (item: string) => void,
  disabled?: boolean,
  customWrapperTagStyles: Object,
}

const Ingredients = ({
  description = '',
  size = 'medium',
  customIngredients,
  customTitle,
  onClose = () => {},
  disabled = false,
  customWrapperTagStyles,
}: Props) => {
  const ingredients = (description && formatStringToArray(description, SEPARATOR_SPLIT_STRING)) || []
  const ingredientAmount = ingredients.length

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
      <Wrapper customStyles={customWrapperTagStyles}>
        {
          ingredientAmount > 0 ?
            ingredients.map((item, index) => (
              <Ingredient
                item={item}
                key={`${item}_${index}`}
                onClose={item => onClose(item)}
                disabled={disabled}
              />
            )) : <Text>No ingredients to show</Text>
        }
      </Wrapper>
    </View>
  )
}

Ingredients.defaultProps = {
  customIngredients: {},
  customTitle: {},
}

export default memo<Props>(Ingredients)
