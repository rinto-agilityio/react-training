// Libs
import React from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Ingredients from './Ingredients'
import Directions from './Directions'
import Loading from '../../../../components/Loading'
import Error from '../../../../components/Error'

type Props = {
  recipe: {
    description: string,
  },
  size: string,
  onSelectStep?: () => void,
  loading: boolean,
  error: Object,
  recipeSteps: Array<{
    step: number,
    title: string
  }>,
}

const Recipe = ({
  recipe,
  size = 'medium',
  onSelectStep,
  loading,
  error,
  recipeSteps,
}: Props) => {
  const errorMessage =
    'Can not load information of Recipe detail. Please check for connection!!!'

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={errorMessage} />
  }
  const {
    description,
  } = recipe

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <Ingredients
        description={description}
        size={size}
      />
      <Directions
        steps={recipeSteps}
        size={size}
        onSelectStep={onSelectStep}
      />
    </View>
  )
}

Recipe.defaultProps = {
  onSelectStep: () => { },
}

export default Recipe
