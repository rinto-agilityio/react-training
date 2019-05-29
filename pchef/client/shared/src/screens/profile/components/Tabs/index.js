import React, { useState } from 'react'

// Components
import { View } from 'react-native'
import TabHeaderItem from '../TabHeaderItem'
import TabContent from '../TabContent'

// Styles
import styles from './styles'

type Props = {
  ownRecipes?: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
    votes: Array<string>,
  }>,
  favoriteRecipe?: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
    votes: Array<string>,
  }>,
}
const Tabs = ({ ownRecipes = [], favoriteRecipe = [] }: Props) => {
  // state
  const [tabActive, setTabActive] = useState(0)
  const totalOfFavoriteRecipes = favoriteRecipe.length
  const totalOfOwnRecipes = ownRecipes.length

  const tabs = [
    { name: 'recipes', number: totalOfOwnRecipes },
    { name: 'favorites', number: totalOfFavoriteRecipes },
  ]

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.wrapTabs]}>
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
        {tabActive === 0 ? (
          <TabContent recipes={ownRecipes} />
        ) : (
          <TabContent recipes={favoriteRecipe} />
        )}
      </View>
    </View>
  )
}

Tabs.defaultProps = {
  favoriteRecipe: [],
  ownRecipes: [],
}

export default Tabs
