// Libs
import React, { useRef, useState } from 'react'
import { View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import IngredientsForm from './IngredientsForm'
import DirectionForm from './DirectionForm'
import TextBox from '../../../../components/TextBox'
import Icon from '../../../../components/Icon'

type Props = {
  size: string,
  handleAddRecipeImage?: () => void,
}

const RecipeForm = ({
  size = 'medium',
  handleAddRecipeImage,
}: Props) => {
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const [visibleIngredients, setVisibleIngredients] = useState(false)
  const [visibleDirections, setVisibleDirections] = useState(false)

  // Data to render input
  const dataInput = [
    {
      placeholder: 'Subtitle',
      refInput: subTitleRef,
    },
    {
      placeholder: 'Why do you like this recipe?',
      refInput: descriptionRef,
    },
  ]

  const dataIcon = [
    {
      name: 'shopping-cart',
      onPress: setVisibleIngredients,
    },
    {
      name: 'create',
      onPress: setVisibleDirections,
    },
  ]

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <TextBox
        placeholder="Title"
        refInput={titleRef}
        customStyle={[styles.input, styles.inputTitle, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
      <Icon
        name="add-a-photo"
        size={METRICS.smallImage}
        onPress={handleAddRecipeImage}
        label="Set cover photo"
        wrapperIconStyle={styles.wrapperIcon}
      />
      {dataInput.map(({ placeholder, refInput }) => (
        <TextBox
          key={placeholder}
          placeholder={placeholder}
          refInput={refInput}
          customStyle={[styles.input, styles[`${size}Input`]]}
          placeholderTextColor={COLORS.grayNavy}
        />
      ))}

      {dataIcon.map(({ name, onPress }) => (
        <Icon
          name={name}
          size={METRICS.mediumIcon}
          onPress={onPress}
          wrapperIconStyle={styles.wrapperIcon}
        />
      ))}
      {visibleIngredients && (
        <IngredientsForm
          size={size}
          onDismiss={() => setVisibleIngredients(false)}
        />
      )}
      {visibleDirections && (
        <DirectionForm
          size={size}
          onDismiss={() => setVisibleDirections(false)}
        />
      )}
    </View>
  )
}

RecipeForm.defaultProps = {
  handleAddRecipeImage: () => {},
}

export default RecipeForm
