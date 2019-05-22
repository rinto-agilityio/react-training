import React, { useState } from 'react'

// Components
import { View, Text } from 'react-native'
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
const Tabs = ({ categories = [], recipes = [] }: Props) => {
  // state
  const [tabActive, setTabActive] = useState(0)
  const totalOfRecipes = recipes.length
  const totalOfCatefories = categories.length

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
          (!totalOfRecipes ? (
            <Text>{NO_RECIPES_MESSAGE}</Text>
          ) : (
            recipes &&
            recipes.map(recipe => (
              <View key={recipe.id} style={styles.tabContentItem}>
                <Recipe size="medium" recipe={recipe} />
              </View>
            ))
          ))}

        {tabActive === 1 &&
          (!totalOfCatefories ? (
            <Text>{NO_CATEGORIES_MESSAGE}</Text>
          ) : (
            categories &&
            categories.map(category => (
              <View key={category.id} style={styles.tabContentItem}>
                <Category category={category} />
              </View>
            ))
          ))}
      </View>
    </View>
  )
}

Tabs.defaultProps = {
  recipes: [],
  categories: [],
}

export default Tabs
