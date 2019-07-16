// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { useEffect, useState, memo } from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import Progress from './ProgressStep'
import ImageBackground from '../../../../components/ImageBackground'
import Reaction from '../../../../components/Reaction'
import Comment from '../../../recipe/components/Comment'
import Loading from '../../../../components/Loading'
import Modal from '../../../../components/Modal'
import Error from '../../../../components/Error'

// utils
import { findStep, customError, checkContainField, formatFiledOnObject, compareStep } from '../../../../helpers/utils'

// Constants
import { DEFAULT_IMAGE } from '../../../../constants'

import type { RecipeStep } from '../../../../flow-types/recipe-step'
import type { UserInfo } from '../../../../flow-types/user'

type Props = {
  recipeSteps: Array<RecipeStep>,
  getRecipe: {
    title: string,
    votes: Array<string>,
    subTitle: string,
    userId: number,
    views: number,
    steps: Array<{
      step: number
    }>,
    id: string,
  },
  size: string,
  onPress?: () => void,
  customRecipe?: {},
  customTitle?: {},
  customDescription?: {},
  customImage?: {},
  customSubTitle?: {},
  customTitleStep?: {},
  loading: boolean,
  error: string,
  getUser: {
    user: UserInfo,
    favoriteRecipe: Array<{id: string}>
  },
  userToggleRecipe: (
    recipeId: string,
    favoriteRecipe: Array<{id: string}>
  ) => Promise<{ data: {userToggleRecipe: {results: Array<string>}}}>,
  userToggleVote: (
    recipeId: string,
    votes: Array<string>,
    userId: string
  ) => Promise<{ data: {userToggleVote: {results: Array<string>}}}>,
  error: {
    graphQLErrors: Array<{message: string}>
  },
  handleRedirectLogin: Function,
  wrapperIconStyle: Object,
}

const Recipe = ({
  size = 'large',
  getUser,
  recipeSteps = [{
    id: '',
    description: '',
    imgUrl: '',
    step: 1,
    title: '',
  }],
  loading,
  error,
  userToggleRecipe,
  userToggleVote,
  getRecipe,
  handleRedirectLogin,
  onPress = () => {},
  customRecipe = {},
  customTitle = {},
  customDescription = {},
  customSubTitle = {},
  customTitleStep = {},
  customImage = {},
  wrapperIconStyle = {},
}: Props) => {
  // order recipeSteps by step asc
  const orderRecipeSteps = recipeSteps.sort(compareStep)
  const defaultStepInfo = orderRecipeSteps[0]
  const [stepInfo, setStepInfo] = useState({})
  const [visible, setVisible] = useState(true)

  useEffect(() => (
    setStepInfo(defaultStepInfo)
  ), [loading, defaultStepInfo])

  if (loading) {
    return <Loading size={size} />
  }

  const handleNavigateLogin = () => {
    setVisible(false)
    handleRedirectLogin()
  }

  if (error) {
    return (
      <Modal
        visible={visible}
        onDismiss={() => handleNavigateLogin()}
        onSubmit={() => handleNavigateLogin()}
        size="medium"
        customDialog={{ top: 150 }}
      >
        <Error message={customError(error.graphQLErrors)} size="medium" />
      </Modal>
    )
  }

  const {
    votes,
    id,
    views,
    title,
    subTitle,
  } = getRecipe

  const {
    favoriteRecipe,
    user,
  } = getUser

  /**
   * Handle when user click prev or next icon
   * param {name}
   */
  const onPressSelectStep = (name: string) => {
    let nextStepInfo = {}

    switch (name) {
      case 'next':
        nextStepInfo = findStep(orderRecipeSteps, stepInfo.step + 1)
        break;
      case 'prev':
        nextStepInfo = findStep(orderRecipeSteps, stepInfo.step - 1)
        break;
      default:
        break;
    }
    setStepInfo(nextStepInfo)
  }

  /**
   * Handle When user click any step
   * @param {step}
   */
  const onPressStep = step => {
    const stepInfoSelect = findStep(orderRecipeSteps, step)
    setStepInfo(stepInfoSelect)
  }

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
    await userToggleVote(id, votes, user.id)
      .then(({ data }) => {
        const {
          userToggleVote: { results },
        } = data

        if (results) {
          checkContainField(formatFiledOnObject(votes), id)
        }
      })
  }

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <View
        style={[
          styles.recipe,
          customRecipe,
        ]}
      >
        <Text
          style={[
            styles.title,
            styles[`${size}Title`],
            customTitle,
          ]}
          onPress={onPress}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.title,
            styles[`${size}Description`],
            customSubTitle,
          ]}
          onPress={onPress}
        >
          {subTitle}
        </Text>
        <ImageBackground
          url={stepInfo.imgUrl || DEFAULT_IMAGE}
          customImageBg={[
            styles.image,
            styles[`${size}Image`],
            customImage,
          ]}
          resizeMode="cover"
        >
          <Text>
            <Text
              style={[
                styles.titleStep,
                styles[`${size}Description`],
                customTitleStep,
              ]}
            >
              {stepInfo.title}
            </Text>
          </Text>
          { orderRecipeSteps.length > 1 && (
            <Progress
              steps={orderRecipeSteps}
              size={size}
              step={stepInfo.step}
              onPressSelectStep={onPressSelectStep}
              onPressStep={onPressStep}
            />
          )}
        </ImageBackground>
      </View>
      <Text
        style={[
          styles.description,
          styles[`${size}Description`],
          customDescription,
        ]}
      >
        {stepInfo.description}
      </Text>
      <Reaction
        votes={votes}
        size={size}
        isFavorited={checkContainField(getUser.favoriteRecipe, id)}
        onPressFavorite={handleSaveRecipe}
        onPressVote={handleToggleVote}
        isVote={checkContainField(formatFiledOnObject(votes), user.id)}
        wrapperIconStyle={wrapperIconStyle}
      />
      <Comment
        name={`by ${user.name}`}
        avatarUri={user.avatar}
        publishedAt={Date.now()}
        isGetTime
        customStyle={{
          paddingLeft: METRICS.largePadding,
        }}
        customNameStyles={{
          fontWeight: 'bold',
        }}
        customContentStyles={{
          fontSize: 12,
          color: COLORS.baseGray,
        }}
      />
      <Text
        style={[
          styles.views,
          styles[`${size}Views`],
        ]}
      >
        {`viewed by ${views}`}
      </Text>
    </View>
  )
}

export default memo<Props>(Recipe)
