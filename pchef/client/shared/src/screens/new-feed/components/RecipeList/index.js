// Libs
import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator, Colors } from 'react-native-paper'
import Recipe from '../Recipe'

// Components
import styles from './styles'

type Props = {
  loading?: boolean,
  recipes?: Array<{
    id: string,
    title: string,
    description: string,
    imgUrl: string,
    votes: Array<number>,
  }>,
  type?: string,
}

const RecipeList = ({ loading, recipes, type = '' }: Props) => {
  // define recipe size follow type
  const size = type === 'primary' ? 'medium' : 'large'

  return (
    <View style={[styles.container, styles[`${type}Container`]]}>
      {loading ? (
        <ActivityIndicator
          animating
          color={Colors.red800}
          size={size}
          style={styles.indicator}
        />
      ) : (
        recipes &&
        recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} size={size} />
        ))
      )}
    </View>
  )
}

RecipeList.defaultProps = {
  type: 'primary',
  recipes: [],
  loading: false,
}

export default RecipeList
