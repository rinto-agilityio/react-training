// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useRef, memo } from 'react'
import { Text } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import TextBox from '../../../../components/TextBox'
import Modal from '../../../../components/Modal'

// Helpers
import { getValueTextBox } from '../../../../helpers/utils'

type Props = {
  size: string,
  visible?: boolean,
  handleSubmitIngredients: (value?: string) => void,
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
    <Modal
      title="Ingredients"
      dismissBtn
      onDismiss={onDismiss}
      onSubmit={() => handleSubmitIngredients(getValueTextBox(ingredientRef.current))}
      visible={visible}
      size={size}
    >
      <TextBox
        placeholder="Write your ingredients"
        refInput={ingredientRef}
        customStyle={[styles.input, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
      <Text style={{ marginTop: METRICS.margin.md, color: COLORS.red }}>
        Note: If you typing multiple ingredients, each ingredient separated by
        commas (,)
      </Text>
    </Modal>
  )
}

IngredientsForm.defaultProps = {
  visible: false,
  onDismiss: () => {},
}

export default memo<Props>(IngredientsForm)
