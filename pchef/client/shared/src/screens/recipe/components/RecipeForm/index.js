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
import Wrapper from '../../../../layout/Wrapper'

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
      label: 'Add ingredients',
      onPress: setVisibleIngredients,
    },
    {
      name: 'create',
      label: 'Write a step',
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
        size={METRICS[`${size}Icon`] * 2}
        onPress={handleAddRecipeImage}
        label="Set cover photo"
        wrapperIconStyle={styles.wrapperMainPhoto}
        customStyle={[styles.label, styles.labelMainPhoto, styles[`${size}Input`]]}
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
      <Wrapper
        direction="row"
        childPosition="spaceAround"
        customStyles={styles.wrapperIcon}
      >
        {dataIcon.map(({ name, onPress, label }) => (
          <Icon
            key={`${name}_icon`}
            name={name}
            size={METRICS[`${size}Icon`]}
            onPress={() => onPress(true)}
            label={label}
            wrapperIconStyle={[styles.icon, styles[`${name}Icon`], styles[`${size}Icon`]]}
            customStyle={[styles.label, styles[`${size}Input`]]}
          />
        ))}
      </Wrapper>
      {visibleIngredients && (
        <IngredientsForm
          size={size}
          onDismiss={() => setVisibleIngredients(false)}
          visible={visibleIngredients}
        />
      )}
      {visibleDirections && (
        <DirectionForm
          size={size}
          onDismiss={() => setVisibleDirections(false)}
          visible={visibleDirections}
          step="1"
        />
      )}
    </View>
  )
}

RecipeForm.defaultProps = {
  handleAddRecipeImage: () => {},
}

export default RecipeForm
