// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, memo } from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Ingredients from './Ingredients'
import Directions from './Directions'
import Loading from '../../../../components/Loading'
import Modal from '../../../../components/Modal'
import Error from '../../../../components/Error'

// Helper
import { customError } from '../../../../helpers/utils'

import type { RecipeStepType } from '../../../../types'

type Props = {
  getRecipe: {
    description: string,
    id: string,
  },
  size: string,
  onSelectStep?: (id: string) => void,
  loading: boolean,
  error: Object,
  recipeSteps: Array<RecipeStepType>,
  handleRedirectLogin: () => void,
  customWrapperTagStyles: Object,
}

const Recipe = ({
  getRecipe = {
    description: '',
    id: '',
  },
  size = 'medium',
  onSelectStep = () => {},
  loading,
  error,
  recipeSteps = [{
    step: 1,
    title: '',
    id: '',
  }],
  handleRedirectLogin,
  customWrapperTagStyles,
}: Props) => {
  const [visible, setVisible] = useState(true)

  if (loading) {
    return <Loading size="large" />
  }

  const handleNavigateLogin = () => {
    setVisible(false)
    handleRedirectLogin()
  }

  if (error) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size={size}
        customDialog={{ top: 150 }}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
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
        disabled
        customWrapperTagStyles={customWrapperTagStyles}
      />
      <Directions
        steps={recipeSteps}
        size={size}
        onSelectStep={() => onSelectStep(id)}
      />
    </View>
  )
}

Recipe.defaultProps = {
  onSelectStep: () => {},
}

export default memo<Props>(Recipe)
