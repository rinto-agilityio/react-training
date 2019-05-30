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

// Containers
import RecipeStepContainer from '../../../../containers/RecipeStep'

// Helper
import { customError, compareStep } from '../../../../helpers/utils'

type Props = {
  getRecipe: {
    id: string,
    description: string,
    votes: Array<string>,
    views: number,
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
  getRecipe,
  size = 'medium',
  onSelectStep,
  loading,
  error,
  recipeSteps = [{
    description: '',
    imgUrl: '',
    step: 1,
    title: '',
  }],
}: Props) => {
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error message={customError(error.graphQLErrors)} />
  }

  const {
    description,
    votes,
    id,
    views,
  } = getRecipe

  // order recipeSteps by step asc
  const orderRecipeSteps = recipeSteps.sort(compareStep)
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
      {
        true && (
        <RecipeStepContainer
          id={id}
          votes={votes}
          views={views}
          recipeSteps={orderRecipeSteps}
        />
        )
      }
    </View>
  )
}

Recipe.defaultProps = {
  onSelectStep: () => {},
}

export default Recipe
