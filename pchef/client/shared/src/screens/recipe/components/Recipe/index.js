// Libs
import React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Ingredients from './Ingredients'
import Directions from './Directions'

type Props = {
  recipe: {
    description: string,
    steps: Array<{
      step: number,
      title: string
    }>,
  },
  size: string,
  onSelectStep?: () => void,
}

const Recipe = ({
  recipe,
  size = 'medium',
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
}

export default Recipe
