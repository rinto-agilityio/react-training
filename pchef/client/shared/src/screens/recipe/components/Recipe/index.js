// Libs
import React, { useState } from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Ingredients from './Ingredients'
import Directions from './Directions'
import Loading from '../../../../components/Loading'
import Modal from '../../../../components/Modal'
import Error from '../../components/Error'

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
  history: Object,
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
  history,
}: Props) => {
  const [visible, setVisible] = useState(true)

  if (loading) {
    return <Loading />
  }

  const handleNavigateLogin = () => {
    setVisible(false)
    history.push('/login')
  }

  if (error) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size={size}
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
