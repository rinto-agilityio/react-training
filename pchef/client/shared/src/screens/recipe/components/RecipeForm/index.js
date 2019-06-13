// Libs
import React, { useRef, useState } from 'react'
import { View, Text, Platform } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Helpers
import { validator } from '../../../../helpers/validators'
import { getValueTextBox } from '../../../../helpers/utils'

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
import Image from '../../../../components/Image'
import Button from '../../../../components/Button'

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
  previewImage?: string,
  publishRecipe: (id: string) => Promise<{ data: { publishRecipe: { id: string } } }>,
  redirectAfterPublish: () => {},
  customStyle: Object,
  customStyleError: Object,
  handleAddStepImage?: () => void,
  stepUrl?: string,
  handleAddRecipeImageOnWeb?: () => void,
  customStyleLabel: Object,
  handleAddStepImageOnWeb?: () => void,
}

const RecipeForm = ({
  size = 'medium',
  handleAddRecipeImage,
  createRecipe,
  previewImage,
  publishRecipe,
  redirectAfterPublish,
  customStyle,
  customStyleError,
  handleAddStepImage = () => {},
  stepUrl,
  handleAddRecipeImageOnWeb,
  customStyleLabel,
  handleAddStepImageOnWeb,
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
  const [directors, setDirectors] = useState([])
  const [errorValidator, setErrorValidator] = useState({})
  const isWeb = Platform.OS === 'web'
  const isDisabled = directors.length > 0 ? false : true

  const handleCreateRecipe = async isOnpen => {
    const title = getValueTextBox(titleRef.current)
    const categoryId = category.id
    const cookingTypeId = cookingType.id
    const errors = validator({
      title,
      categoryId,
      cookingTypeId,
    })

    if (errors) {
      setErrorValidator(errors.errorMessage)
    }

    if (!errors.isError) {
      try {
        await createRecipe(
          categoryId,
          cookingTypeId,
          title || '',
          getValueTextBox(subTitleRef.current) || '',
          previewImage || '',
          ingredients,
          true,
        ).then(({ data }) => {
          const { id } = data.createRecipe
          if (id) {
            setVisibleDirections(isOnpen)
          }
          setRecipe(data.createRecipe)
        })
      } catch (err) {
        setError(err)
      }
    }
  }

  const handleSubmitStep = data => {
    setDirectors(data)
    setVisibleDirections(false)
  }

  const handlePublishRecipe = async () => {
    try {
      await publishRecipe(recipe.id)
        .then(({ data }) => {
          const { id } = data.publishRecipe
          if (id) {
            redirectAfterPublish()
          }
        })
    } catch (err) {
      setError(err)
    }
  }

  const dataIcon = [
    {
      name: 'shopping-cart',
      label: 'Add ingredients',
      onPress: setVisibleIngredients,
    },
    {
      name: 'create',
      label: 'Save And Write Steps',
      onPress: handleCreateRecipe,
    },
  ]

  const dataIconClassify = [
    {
      label: 'Add categories',
      onPress: setVisibleCategories,
      value: category.name || '',
      error: errorValidator.categoryId,
    },
    {
      label: 'Add cooking types',
      onPress: setVisibleCookingTypes,
      value: cookingType.name || '',
      error: errorValidator.cookingTypeId,
    },
  ]

  if (error) {
    return <Error message={error} />
  }

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`], customStyle]}>
      <Text style={[styles.headerForm]}>CREATE NEW A RECIPE</Text>
      <TextBox
        placeholder="Title"
        refInput={titleRef}
        customStyle={[styles.input, styles.inputTitle, styles[`${size}Input`]]}
        placeholderTextColor={COLORS.grayNavy}
      />
      <Error
        message={errorValidator.title}
        customStyle={customStyleError}
      />
      <View>
        <Text
          for="file-input"
          accessibilityRole="label"
        >
          <Icon
            name="add-a-photo"
            size={METRICS[`${size}Icon`] * 2}
            onPress={handleAddRecipeImage}
            label="Set cover photo"
            wrapperIconStyle={styles.wrapperMainPhoto}
            customStyle={[styles.label, styles.labelMainPhoto, styles[`${size}Input`], customStyleLabel]}
          />
        </Text>
        {
          isWeb && (
            <input
              id="file-input"
              type="file"
              style={{
                display: 'none',
              }}
              onChange={handleAddRecipeImageOnWeb}
            />
          )
        }
      </View>

      {previewImage ? (
        <Image url={previewImage} customImageStyle={{ width: '100%', height: 150 }} />
      ) : null}
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
        {dataIconClassify.map(({ onPress, label, value, error }, index) => (
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
            {error ? (
              <Error
                message={error}
                customStyle={customStyleError}
              />
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
            setIngredients(value || '')
            setVisibleIngredients(false)
          }}
        />
      )}

      {visibleDirections && (
        <DirectionForm
          size={size}
          onDismiss={handleSubmitStep}
          visible={visibleDirections}
          recipeId={recipe.id}
          handleAddStepImage={handleAddStepImage}
          stepUrl={stepUrl}
          handleAddStepImageOnWeb={handleAddStepImageOnWeb}
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
      {
        isWeb && (
          <View style={[styles.wrapperButton]}>
            <Button
              onPress={handlePublishRecipe}
              title="Save Recipe"
              buttonStyle={isDisabled ? styles.disableButton : [styles.btnModal, styles[`${size}btnModal`]]}
              disabled={isDisabled}
            />
          </View>
        )
      }
    </View>
  )
}

RecipeForm.defaultProps = {
  handleAddRecipeImage: () => {},
  previewImage: '',
  handleAddStepImage: () => {},
  stepUrl: '',
  handleAddRecipeImageOnWeb: () => {},
  handleAddStepImageOnWeb: () => {},
}

export default RecipeForm
