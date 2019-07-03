// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Components
import Image from '../../../../components/Image'
import Reaction from '../../../../components/Reaction'

// Helpers
import {
  checkContainField,
  formatFiledOnObject,
  checkContain,
} from '../../../../helpers/utils'

// Constants
import { DEFAULT_IMAGE } from '../../../../constants'

import type { RecipeType } from '../../../../types'

type Props = {
  recipe: RecipeType,
  size?: string,
  favoriteRecipe: Array<{
    id: string,
  }>,
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{ id: string }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  handleClickRecipe: (recipeId: string) => void,
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: { userToggleVote: { results: Array<string>}}}>,
  userId: string,
  wrapperIconStyle: Object,
}

const Recipe = ({
  recipe,
  size = 'large',
  favoriteRecipe,
  userToggleRecipe,
  handleClickRecipe,
  userToggleVote,
  userId,
  wrapperIconStyle,
}: Props) => {
  const { id, title, description, thumbnail, votes } = recipe

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

  const handleToggleVote = async () => {
    await userToggleVote(id, votes, userId)
      .then(({ data }) => {
        const {
          userToggleVote: { results },
        } = data

        if (results) {
          checkContain(votes, id)
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
          url={thumbnail || DEFAULT_IMAGE}
          customImageStyle={[styles.image, styles[`${size}Image`]]}
          handleTouch={() => handleClickRecipe(recipe.id)}
        />
      </View>
      <Reaction
        votes={votes}
        size={size}
        isFavorited={isFavorited}
        onPressFavorite={handleSaveRecipe}
        onPressVote={handleToggleVote}
        isVote={checkContain(votes, userId)}
        wrapperIconStyle={wrapperIconStyle}
      />
    </View>
  )
}

Recipe.defaultProps = {
  size: 'large',
}

export default memo<Props>(Recipe)
