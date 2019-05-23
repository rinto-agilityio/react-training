// Libs
import React from 'react'
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

import { recipes } from '../../../../mocks'

type Props = {
  stepInfo: {
    description: string,
    imgUrl: string,
    step: number,
    title: string,
  },
  recipe: {
    title: string,
    votes: Array<number>,
    subTitle: string,
    views: number,
    userId: number,
    steps: Array<{
      step: number
    }>
  },
  size: string,
  onPress?: () => void,
  customRecipe?: {},
  customTitle?: {},
  customDescription?: {},
  customImage?: {},
  customSubTitle?: {},
  customTitleStep?: {}
}

const Recipe = ({
  size = 'large',
  recipe,
  onPress,
  customRecipe,
  customTitle,
  customDescription,
  customImage = {},
  customSubTitle,
  customTitleStep,
  stepInfo,
  loading,
  error
}: Props) => {

  const {
    title,
    subTitle,
    votes,
    steps,
    userId,
    views,
  } = recipes[0]

  if (loading) {
    return <Text>Loading.......</Text>
  }

  if (error) {
    return <Text>error</Text>
  }
  const {
    imgUrl,
    description,
    step,
  } = stepInfo

  // console.log('data', stepInfo);

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
          url={imgUrl}
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
            steps={steps}
            size={size}
            step={step}
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
        {description}
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
