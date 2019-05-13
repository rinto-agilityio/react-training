// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import ImageBackground from '../../../../components/ImageBackground'
import Reaction from '../../../../components/Reaction'
import Progress from './ProcessStep'
import Comment from '../../../recipe/components/Comment'

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
  onClick?: () => void,
  customRecipe?: {},
  customTitle?: {},
  customDescription?: {},
  customImage?: {},
  customSubTitle?: {},
  customTitleStep?: {}
}

const Recipe = ({
  stepInfo,
  size = 'large',
  recipe,
  onClick,
  customRecipe,
  customTitle,
  customDescription,
  customImage = {},
  customSubTitle,
  customTitleStep,
}: Props) => {
  const {
    imgUrl,
    description,
    step,
  } = stepInfo
  const {
    title,
    subTitle,
    votes,
    steps,
    userId,
    views,
  } = recipe

  return (
    <View style={[styles.wrapper, styles[`${size}Wrapper`]]}>
      <View
        style={[
          styles.recipe,
          customRecipe,
        ]}
        onClick={onClick}
      >
        <Text
          style={[
            styles.title,
            styles[`${size}Title`],
            customTitle,
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.title,
            styles[`${size}TitleStep`],
            customSubTitle,
          ]}
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
  onClick: () => {},
  customRecipe: {},
  customTitle: {},
  customDescription: {},
  customSubTitle: {},
  customTitleStep: {},
  customImage: {},
}

export default Recipe
