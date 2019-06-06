// Libs
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// Styles
import styles from './styles'

// Components
import Image from '../../../../components/Image'
import Reaction from '../../../../components/Reaction'

// Helpers
import {
  checkContainField,
  formatFiledOnObject,
} from '../../../../helpers/utils'

// Constants
import { DEFAULT_IMAGE } from '../../../../constants'

type Props = {
  recipe: {
    id: string,
    title: string,
    description: string,
    imgUrl: string,
    votes: Array<string>,
  },
  size?: string,
  favoriteRecipe: Array<{
    id: string,
  }>,
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  handleClickRecipe: (recipeId: string) => void,
}

const Recipe = ({
  recipe,
  size = 'large',
  favoriteRecipe,
  userToggleRecipe,
  handleClickRecipe,
}: Props) => {
  const { id, title, description, imgUrl, votes } = recipe

  const isFavorited = checkContainField(favoriteRecipe, id)

  const handleSaveRecipe = async () => {
    await userToggleRecipe(id, favoriteRecipe).then(({ data }) => {
      const {
        userToggleRecipe: { results },
      } = data

      if (results) {
        checkContainField(formatFiledOnObject(results), id)
      }
    })
  }

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <View style={styles.recipe}>
        <Text
          style={[styles.title, styles[`${size}Title`]]}
          numberOfLines={1}
          ellipsizeMode="tail"
          onPress={() => handleClickRecipe(recipe.id)}
        >
          {title}
        </Text>
        <Text
          style={[styles.description, styles[`${size}Description`]]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {description}
        </Text>
        <Image
          url={imgUrl || DEFAULT_IMAGE}
          customImageStyle={[styles.image, styles[`${size}Image`]]}
          handleTouch={() => handleClickRecipe(recipe.id)}
        />
      </View>
      <Reaction
        votes={votes}
        size={size}
        isFavorited={isFavorited}
        onPressFavorite={handleSaveRecipe}
      />
    </View>
  )
}

Recipe.defaultProps = {
  size: 'large',
}

export default Recipe
