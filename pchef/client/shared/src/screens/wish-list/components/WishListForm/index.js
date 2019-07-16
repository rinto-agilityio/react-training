// @flow
/* eslint-disable react/require-default-props */
// Libs
import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react'
import { View, Text } from 'react-native'

// Styles
import styles from './styles'

// Helpers
import { getDateOfWeek, getMilisecondsFromTime } from '../../../../helpers/date-time'
import { validator } from '../../../../helpers/validators'

// Components
import Calendar from '../../../../components/Calendar'
import Modal from '../../../../components/Modal'
import Categories from '../../../../containers/Categories'
import CookingTypes from '../../../../containers/CookingTypes'
import Error from '../../../../components/Error'
import Wrapper from '../../../../layout/Wrapper'
import Icon from '../../../../components/Icon'
import Button from '../../../../components/Button'
import Recipe from './components/Recipe'

// Themes
import { METRICS } from '../../../../themes'

// Constants
import { WEB_PLATFORM } from '../../../../constants'

import type { RecipeType } from '../../../../types'

type Props = {
  size: string,
  createWishList: (
    categoryId: string,
    cookingTypeId: string,
    date: string,
  ) => Promise<{ data: { createWishList: { id: string } }}>,
  handleRedirectWishlist: () => void,
  customContainer?: {},
  customModal?: {},
  recipes: Array<RecipeType>,
  handleRedirectLogin: () => void,
  wrapperIconStyle: Object,
}

const WishListForm = forwardRef<Props, Function>(({
  size = 'medium',
  createWishList,
  handleRedirectWishlist,
  customContainer = {},
  customModal = {},
  recipes = [],
  handleRedirectLogin,
  wrapperIconStyle,
}: Props, ref) => {
  const [visible, setVisible] = useState(false)
  const [visibleCategories, setVisibleCategories] = useState(false)
  const [visibleCookingTypes, setVisibleCookingTypes] = useState(false)
  const [category, setCategory] = useState({})
  const [cookingType, setCookingType] = useState({})
  const [error, setError] = useState('')
  const [errorValidator, setErrorValidator] = useState({})
  const [recipeList, setRecipeList] = useState([])

  // Default selectedDay is the start date of next week
  const startDateNextWeek = getDateOfWeek().minDate
  const [selectedDay, setSelectedDay] = useState(startDateNextWeek)
  const isShowSelectedDay = selectedDay !== startDateNextWeek

  const dayRange = getDateOfWeek()

  useEffect(() => {
    const recipeList = recipes
    setRecipeList(recipeList)
  }, [recipes.length])

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

  const handleCreateWishList = async () => {
    const categoryId = category.id
    const cookingTypeId = cookingType.id
    const date = selectedDay;

    const errors = validator({
      categoryId,
      cookingTypeId,
    })

    if (errors) {
      setErrorValidator(errors.errorMessage)
    }

    if (!errors.isError) {
      try {
        await createWishList(
          categoryId,
          cookingTypeId,
          getMilisecondsFromTime(date).toString(),
        ).then(({ data = {} }) => {
          const { id } = data.createWishList
          if (id) {
            handleRedirectWishlist()
          }
        })
      } catch (err) {
        setError(err)
      }
    }
  }

  useImperativeHandle(ref, () => ({
    handleCreateWishList,
  }))

  if (error) {
    return <Error message={error} />
  }

  const suggestedRecipeList = category.id && cookingType.id && recipeList.filter(recipe => (recipe.categoryId === category.id && recipe.cookingTypeId === cookingType.id))
  const recipeListData = suggestedRecipeList && suggestedRecipeList.map(recipe => (
    <Recipe
      recipe={recipe}
      key={recipe.id}
    />
  ))

  return (
    <View style={WEB_PLATFORM ? styles.container : customContainer}>
      <Icon
        name="date-range"
        size={METRICS[`${size}Icon`]}
        onPress={() => setVisible(true)}
        label="Select date"
        wrapperIconStyle={[styles.icon, styles.wrapperMainPhoto, wrapperIconStyle]}
        customStyle={styles[`${size}Input`]}
      />
      { isShowSelectedDay ? (
        <Text style={[styles.text, styles[`${size}Input`]]}>
          { selectedDay }
        </Text>
      ) : null }
      { visible && (
        <Modal
          onDismiss={() => setVisible(false)}
          visible={visible}
          onSubmit={() => setVisible(false)}
          size={size}
          customDialog={[styles.modal, customModal]}
        >
          <Calendar
            selectedDay={selectedDay}
            dayRange={dayRange}
            onSelectDay={({ dateString }) => setSelectedDay(dateString)}
            size={size}
          />
        </Modal>
      ) }
      <Wrapper
        direction="column"
        childPosition="middle"
        customStyles={[styles.wrapperIcon]}
      >
        { dataIconClassify.map(({ onPress, label, value, error }, index) => (
          <View key={`add-circle_${index}`} style={{ width: '100%' }}>
            <Icon
              name="add-circle"
              size={METRICS[`${size}Icon`]}
              onPress={() => onPress(true)}
              label={label}
              wrapperIconStyle={[styles.icon, styles.classifyIcon, wrapperIconStyle]}
              customStyle={styles[`${size}Input`]}
            />
            { value ? (
              <Text style={[styles.text, styles[`${size}Input`]]}>
                { value }
              </Text>
            ) : null }
            { error ? (
              <Error message={error} />
            ) : null }
          </View>
        )) }
      </Wrapper>
      {
        visibleCategories && (
          <Categories
            size={size}
            title="Categories"
            onDismiss={() => setVisibleCategories(false)}
            visible={visibleCategories}
            handleSubmit={value => {
              setCategory(value)
              setVisibleCategories(false)
            }}
            handleRedirectLogin={handleRedirectLogin}
          />
        )
      }
      {
        visibleCookingTypes && (
          <CookingTypes
            size={size}
            title="Cooking types"
            onDismiss={() => setVisibleCookingTypes(false)}
            visible={visibleCookingTypes}
            handleSubmit={value => {
              setCookingType(value)
              setVisibleCookingTypes(false)
            }}
            handleRedirectLogin={handleRedirectLogin}
          />
        )
      }
      {
        recipeListData
      }
      {
        WEB_PLATFORM && (
          <Button
            title="Add"
            onPress={() => handleCreateWishList()}
            buttonStyle={styles.button}
          />
        )
      }
    </View>
  )
})

export default WishListForm
