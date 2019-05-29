import React from 'react'

// COmponents
import { Text, View } from 'react-native'
import Recipe from '../../../new-feed/components/Recipe'

// Styles
import styles from './styles'

type Props = {
  recipes: Array<{
    id: string,
    title: string,
    imgUrl: string,
    description: string,
    votes: Array<string>,
  }>,
}

const TabContent = ({ recipes }: Props) => {
  const NO_RECIPES_MESSAGE = 'No recipes to show'

  return (
    <>
      {recipes.length ? (
        recipes.map((recipe, index) => (
          <View key={index} style={styles.tabContentItem}>
            <Recipe size="medium" recipe={recipe} />
          </View>
        ))
      ) : (
        <Text>{NO_RECIPES_MESSAGE}</Text>
      )}
    </>
  )
}

export default TabContent
