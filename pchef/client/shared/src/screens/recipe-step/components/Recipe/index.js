// Libs
import React, { useEffect, useState } from 'react'
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
import Error from '../../../../components/Error'

// mock data
import { recipes } from '../../../../mocks'

// utils
import { findStep, compareStep, customError } from '../../../../helpers/utils'

type Props = {
  recipeSteps: Array<{
    description: string,
    imgUrl: string,
    step: number,
    title: string,
  }>,
  recipe: {
    title: string,
    votes: Array<number>,
    subTitle: string,
    views: number,
    userId: number,
    steps: Array<{
      step: number
    }>,
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
  error: string
}

const Recipe = ({
  size = 'large',
  onPress,
  customRecipe,
  customTitle,
  customDescription,
  customImage = {},
  customSubTitle,
  customTitleStep,
  recipeSteps = [{
    description: '',
    imgUrl: '',
    step: 1,
    title: '',
  }],
  loading,
  error,
}: Props) => {
  // order recipeSteps by step asc
  const orderRecipeSteps = recipeSteps.sort(compareStep)
  const defaultStepInfo = orderRecipeSteps[0]
  const [stepInfo, setStepInfo] = useState()

  useEffect(() => (
    setStepInfo(defaultStepInfo)
  ), [loading, defaultStepInfo])

  const {
    title,
    subTitle,
    votes,
    userId,
    views,
  } = recipes[0]

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={customError(error.graphQLErrors)} />
  }
  /**
   * Handle when user click prev or next icon
   * param {name}
   */
  const onPressSelectStep = name => {
    let nextStepInfo

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
          url={stepInfo.imgUrl}
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
          <Progress
            steps={orderRecipeSteps}
            size={size}
            step={stepInfo.step}
            onPressSelectStep={onPressSelectStep}
            onPressStep={onPressStep}
          />
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
        isFavorited={false}
      />
      <Comment
        name={`by ${userId}`}
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

Recipe.defaultProps = {
  onPress: () => {},
  customRecipe: {},
  customTitle: {},
  customDescription: {},
  customSubTitle: {},
  customTitleStep: {},
  customImage: {},
}

export default Recipe
