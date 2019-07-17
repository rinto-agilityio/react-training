// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useState, memo } from 'react'

// Components
import { View } from 'react-native'
import TabHeaderItem from '../TabHeaderItem'
import TabContent from '../TabContent'

// Styles
import styles from './styles'

import type { Recipe } from '../../../../flow-types/recipe'

type Props = {
  ownRecipes?: Array<Recipe>,
  favoriteRecipe?: Array<Recipe>,
  userId: string,
  wrapperIconStyle: Object,
}
const Tabs = ({
  ownRecipes = [],
  favoriteRecipe = [],
  userId,
  wrapperIconStyle,
}: Props) => {
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
          <TabContent
            recipes={ownRecipes}
            favoriteRecipe={favoriteRecipe}
            isRecipeTab
            userId={userId}
            wrapperIconStyle={wrapperIconStyle}
          />
        ) : (
          <TabContent
            recipes={favoriteRecipe}
            userId={userId}
            wrapperIconStyle={wrapperIconStyle}
          />
        )}
      </View>
    </View>
  )
}

Tabs.defaultProps = {
  favoriteRecipe: [],
  ownRecipes: [],
}

export default memo<Props>(Tabs)
