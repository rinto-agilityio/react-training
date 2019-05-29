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

// Helper
import { customError } from '../../../../helpers/utils'

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
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message={customError(error.graphQLErrors)} />
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
  onSelectStep: () => {},
}

export default Recipe
