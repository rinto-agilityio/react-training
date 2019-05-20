import React, { useState } from 'react'

// Components
import { View } from 'react-native'
import TabHeaderItem from '../TabHeaderItem'
import Recipe from '../../../new-feed/components/Recipe'
import Category from '../Category'

// Styles
import styles from './styles'

type Props = {
  categories?: Array<{
    id: string,
    name: string,
    imgUrl: string,
  }>,
  recipes?: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
    votes: Array<number>,
  }>,
}
const Tabs = ({ categories, recipes }: Props) => {
  // state
  const [tabActive, setTabActive] = useState(0)
  const totalOfRecipes = recipes ? recipes.length : 0
  const totalOfCatefories = categories ? categories.length : 0

  const tabs = [
    { name: 'recipes', number: totalOfRecipes },
    { name: 'favorites', number: totalOfCatefories },
  ]

  const NO_RECIPES_MESSAGE = 'No recipes to show'
  const NO_CATEGORIES_MESSAGE = 'No categories to show'

  return (
    <View>
      <View style={styles.wrapTabs}>
        {tabs.map((tab, index) => (
          <TabHeaderItem
            key={index}
            totalOfItem={tab.number}
            name={tab.name}
            active={tabActive === index}
            handlePressTab={() => setTabActive(index)}
          />
        ))}
      </View>
      <View style={styles.wrapContent}>
        {tabActive === 0 &&
          (!totalOfRecipes
            ? NO_RECIPES_MESSAGE
            : recipes &&
              recipes.map(recipe => (
                <View style={styles.tabContentItem}>
                  <Recipe size="medium" key={recipe.id} recipe={recipe} />
                </View>
              )))}

        {tabActive === 1 &&
          (!totalOfCatefories
            ? NO_CATEGORIES_MESSAGE
            : categories &&
              categories.map(category => (
                <View style={styles.tabContentItem}>
                  <Category key={category.id} category={category} />
                </View>
              )))}
      </View>
    </View>
  )
}

Tabs.defaultProps = {
  recipes: [],
  categories: [],
}

export default Tabs
