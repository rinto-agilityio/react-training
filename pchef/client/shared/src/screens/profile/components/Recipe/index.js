// Libs
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

// Styles
import styles from './styles'

// Components
import Image from '../../../../components/Image'
import Reaction from '../../../../components/Reaction'

// Helpers
import { checkContainField, checkContain } from '../../../../helpers/utils'

// Constanst
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
    favoriteRecipe: Array<{
      id: string,
    }>
  ) => Promise<{ data: { userToggleRecipe: { results: Array<string> } } }>,
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: { userToggleVote: { results: Array<string>}}}>,
  userId: string,
}

const Recipe = ({
  recipe,
  size = 'large',
  favoriteRecipe,
  userToggleRecipe,
  userToggleVote,
  userId,
}: Props) => {
  const { id, title, description, imgUrl, votes } = recipe

  // Call mutation for save recipe
  const handleSaveRecipe = () => {
    userToggleRecipe(id, favoriteRecipe)
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

  const isFavorited = checkContainField(favoriteRecipe, id)

  return (
    <TouchableOpacity style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <View style={styles.recipe}>
        <Text
          style={[styles.title, styles[`${size}Title`]]}
          numberOfLines={1}
          ellipsizeMode="tail"
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
        />
      </View>
      <Reaction
        votes={votes}
        size={size}
        isFavorited={isFavorited}
        isVote={checkContain(votes, userId)}
        onPressFavorite={handleSaveRecipe}
        onPressVote={handleToggleVote}
      />
    </TouchableOpacity>
  )
}

Recipe.defaultProps = {
  size: 'large',
}

export default Recipe
