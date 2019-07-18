// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useRef, memo } from 'react'
import { Text } from 'react-native'
import whyDidYouRender from '@welldone-software/why-did-you-render'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import TextBox from '../../../../components/TextBox'
import Modal from '../../../../components/Modal'

// Helpers
import { getValueTextBox } from '../../../../helpers/utils'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
  })
}

type Props = {
  size: string,
  visible?: boolean,
  handleSubmitIngredients: (value?: string) => void,
  onDismiss: () => void,
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
        placeholderTextColor={COLORS.input.placeholder}
      />
      <Text style={{ marginTop: METRICS.margin.md, color: COLORS.text.error }}>
          Note: If you typing multiple ingredients, each ingredient separated by commas (,)
      </Text>
    </Modal>
  )
}

IngredientsForm.defaultProps = {
  visible: false,
}

IngredientsForm.whyDidYouRender = true

export default memo<Props>(IngredientsForm)
