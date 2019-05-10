// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Ingredients from './Ingredients'
import Directions from './Directions'

type Props = {
  recipe: {
    title: string,
    description: string,
    votes: Array<number>,
    steps: Array<{
      step: number,
      description: string
    }>,
  },
  size?: string,
  onSelectStep?: () => void,
  customRecipe?: {},
  customTitle?: {},
  customDescription?: {},
}

const Recipe = ({
  recipe,
  size = '',
  onSelectStep,
}: Props) => {
  const {
    description,
    steps,
  } = recipe

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <Ingredients
        description={description}
        size={size}
      />
      <Directions
        steps={steps}
        size={size}
        onSelectStep={onSelectStep}
      />
    </View>
  )
}

Recipe.defaultProps = {
  onSelectStep: () => {},
  customRecipe: {},
  customTitle: {},
  customDescription: {},
  size: 'medium',
}

export default Recipe
