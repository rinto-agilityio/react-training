// Libs
import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Helpers
import { validator } from '../../../../helpers/validators'

// Components
import IngredientsForm from './IngredientsForm'
import Ingredients from '../Recipe/Ingredients'
import TextBox from '../../../../components/TextBox'
import Icon from '../../../../components/Icon'
import Wrapper from '../../../../layout/Wrapper'
import Categories from '../../../../containers/Categories'
import CookingTypes from '../../../../containers/CookingTypes'
import DirectionForm from '../../../../containers/DirectionForm'
import Error from '../../../../components/Error'

type Props = {
  size: string,
  handleAddRecipeImage?: () => void,
  createRecipe: (
    categoryId: string,
    cookingTypeId: string,
    title: string,
    subTitle: string,
    imgUrl: string,
    description: string,
    isDraft: boolean,
  ) => Promise<{ data: { createRecipe: { id: string } } }>,
}

const RecipeForm = ({
  size = 'medium',
  handleAddRecipeImage,
  createRecipe,
}: Props) => {
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const [visibleIngredients, setVisibleIngredients] = useState(false)
  const [visibleDirections, setVisibleDirections] = useState(false)
  const [visibleCategories, setVisibleCategories] = useState(false)
  const [visibleCookingTypes, setVisibleCookingTypes] = useState(false)
  const [category, setCategory] = useState({})
  const [cookingType, setCookingType] = useState({})
  const [ingredients, setIngredients] = useState('')
  const [recipe, setRecipe] = useState({})
  const [error, setError] = useState('')

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

  const dataIconClassify = [
    {
      label: 'Add categories',
      onPress: setVisibleCategories,
      value: category.name || '',
    },
    {
      label: 'Add cooking types',
      onPress: setVisibleCookingTypes,
      value: cookingType.name || '',
    },
  ]

  const handleCreateRecipe = async () => {
    const title = titleRef.current ? titleRef.current._node.value.trim() : ''
    const categoryId = category.id
    const cookingTypeId = cookingType.id
    const errors = validator({
      title,
      categoryId,
      cookingTypeId,
    })

    if (!Object.keys(errors).length) {
      try {
        await createRecipe(
          categoryId,
          cookingTypeId,
          title,
          subTitleRef.current ? subTitleRef.current._node.value.trim() : '',
          '',
          ingredients,
          true,
        ).then(({ data = {} }) => {
          setRecipe(data.createRecipe)
        })
      } catch (err) {
        setError(err)
      }
    }
  }

  if (error) {
    return <Error message={error} />
  }

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
      <TextBox
        placeholder="Subtitle"
        refInput={subTitleRef}
        customStyle={[styles.input, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
      <Wrapper
        direction="column"
        childPosition="middle"
        customStyles={[styles.wrapperIcon, styles.wrapperClassifyIcon]}
      >
        {dataIconClassify.map(({ onPress, label, value }, index) => (
          <View key={`add-circle_${index}`} style={{ width: '100%' }}>
            <Icon
              name="add-circle"
              size={METRICS[`${size}Icon`]}
              onPress={() => onPress(true)}
              label={label}
              wrapperIconStyle={[styles.icon, styles.classifyIcon]}
              customStyle={styles[`${size}Input`]}
            />
            {value ? (
              <Text style={[{ marginBottom: METRICS.largeMargin }, styles[`${size}Input`]]}>
                {value}
              </Text>
            ) : null}
          </View>
        ))}
      </Wrapper>
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
            disabled={name === 'create' && !recipe.id}
          />
        ))}
      </Wrapper>
      {ingredients ? (
        <Ingredients
          description={ingredients}
          size={size}
          customIngredients={{
            marginTop: METRICS.largeMargin,
          }}
        />
      ) : null}
      {visibleIngredients && (
        <IngredientsForm
          size={size}
          onDismiss={() => setVisibleIngredients(false)}
          visible={visibleIngredients}
          handleSubmitIngredients={value => {
            setIngredients(value)
            setVisibleIngredients(false)
          }}
        />
      )}
      {visibleDirections && (
        <DirectionForm
          size={size}
          onDismiss={() => setVisibleDirections(false)}
          visible={visibleDirections}
          recipeId={recipe.id}
        />
      )}
      {visibleCategories && (
        <Categories
          size={size}
          title="Categories"
          onDismiss={() => setVisibleCategories(false)}
          visible={visibleCategories}
          handleSubmit={value => {
            setCategory(value)
            setVisibleCategories(false)
          }}
        />
      )}
      {visibleCookingTypes && (
        <CookingTypes
          size={size}
          title="Cooking types"
          onDismiss={() => setVisibleCookingTypes(false)}
          visible={visibleCookingTypes}
          handleSubmit={value => {
            setCookingType(value)
            setVisibleCookingTypes(false)
          }}
        />
      )}
    </View>
  )
}

RecipeForm.defaultProps = {
  handleAddRecipeImage: () => {},
}

export default RecipeForm
