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
  getRecipe: {
    description: string,
    id: string,
  },
  size: string,
  onSelectStep: (id: string) => void,
  loading: boolean,
  error: Object,
  recipeSteps: Array<{
    step: number,
    title: string
  }>,
}

const Recipe = ({
  getRecipe = {
    description: '',
    id: '',
  },
  size = 'medium',
  onSelectStep,
  loading,
  error,
  recipeSteps = [{
    step: 1,
    title: '',
  }],
}: Props) => {
  if (loading) {
    return <Loading size={size} />
  }
  if (error) {
    return <Error message={customError(error.graphQLErrors)} />
  }

  const {
    description,
    id,
  } = getRecipe

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <Ingredients
        description={description}
        size={size}
      />
      <Directions
        steps={recipeSteps}
        size={size}
        onSelectStep={() => onSelectStep(id)}
      />
    </View>
  )
}

export default Recipe
