// Libs
import React, { useRef } from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS } from '../../../../themes'

// Components
import TextBox from '../../../../components/TextBox'
import Modal from '../../../../components/Modal'

type Props = {
  size: string,
  handleSubmitIngredients?: () => void,
  onDismiss?: () => void,
}

const IngredientsForm = ({
  size = 'medium',
  handleSubmitIngredients,
  onDismiss,
}: Props) => {
  const ingredientRef = useRef(null)

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <Modal
        title="Ingredients"
        dismissBtn
        onDismiss={onDismiss}
        onSubmit={handleSubmitIngredients}
      >
        <TextBox
          placeholder="Write your ingredients"
          refInput={ingredientRef}
          customStyle={[styles.input, styles[`${size}Input`]]}
          placeholderTextColor={COLORS.grayNavy}
        />
      </Modal>
    </View>
  )
}

IngredientsForm.defaultProps = {
  handleSubmitIngredients: () => {},
  onDismiss: () => {},
}

export default IngredientsForm
