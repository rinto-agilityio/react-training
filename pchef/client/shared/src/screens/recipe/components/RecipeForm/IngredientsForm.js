// Libs
import React, { useRef } from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import TextBox from '../../../../components/TextBox'
import Modal from '../../../../components/Modal'

type Props = {
  size: string,
  visible?: boolean,
  handleSubmitIngredients: (value: string) => void,
  onDismiss?: () => void,
}

const IngredientsForm = ({
  size = 'medium',
  handleSubmitIngredients,
  onDismiss,
  visible,
}: Props) => {
  const ingredientRef = useRef(null)

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <Modal
        title="Ingredients"
        dismissBtn
        onDismiss={onDismiss}
        onSubmit={() => handleSubmitIngredients(ingredientRef.current ? ingredientRef.current._node.value.trim() : '')}
        visible={visible}
        size={size}
      >
        <TextBox
          placeholder="Write your ingredients"
          refInput={ingredientRef}
          customStyle={[styles.input, styles[`${size}Input`]]}
          placeholderTextColor={COLORS.grayNavy}
        />
        <Text style={{ marginTop: METRICS.mediumMargin, color: COLORS.red }}>
           Note: If you typing multiple ingredients, each ingredient separated by commas (,)
        </Text>
      </Modal>
    </View>
  )
}

IngredientsForm.defaultProps = {
  visible: false,
  onDismiss: () => {},
}

export default IngredientsForm
