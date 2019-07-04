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

// Constants
import { DEFAULT_IMAGE } from '../../../../constants'

import type { RecipeType } from '../../../../types'

type Props = {
  recipe: RecipeType,
  size?: string,
  handleClickRecipe: (recipeId: string) => void,
  userId: string,
  wrapperIconStyle: Object,
  isFavorited: boolean,
  isVote: boolean,
  handleSaveRecipe: (id: string) => Promise<void>,
  handleToggleVote: (id: string, votes: Array<string>, userId: string) => Promise<void>
}
const Recipe = ({
  recipe,
  size = 'large',
  isFavorited,
  handleClickRecipe,
  isVote,
  userId,
  wrapperIconStyle,
  handleSaveRecipe,
  handleToggleVote,
}: Props) => {
  const { id, title, description, thumbnail, votes } = recipe

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
        onPressFavorite={() => handleSaveRecipe(id)}
        onPressVote={() => handleToggleVote(id, votes, userId)}
        isVote={isVote}
        wrapperIconStyle={wrapperIconStyle}
      />
    </View>
  )
}

Recipe.defaultProps = {
  size: 'large',
}

const areEqual = (prevProps, nextProps) => (
  prevProps.isFavorited === nextProps.isFavorited && prevProps.isVote === nextProps.isVote
)

export default memo<Props>(Recipe, areEqual)
