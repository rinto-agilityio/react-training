// Libs
import React from 'react'
import { Text, View } from 'react-native'

// Styles
import styles from './styles'

// Components
import ImageBackground from '../../../../components/ImageBackground'
import Reaction from '../../../../components/Reaction'
import Progress from './ProcessStep';

type Props = {
  stepInfo: {
    description: string,
    imgUrl: string,
    step: number,
  },
  recipe: {
    title: string,
    votes: number,
    subTitle: string,
    views: Array<number>,
    userId: number,
    steps: Array<number>
  },
  size: string,
  onClick?: () => void,
  customRecipe?: {},
  customTitle?: {},
  customDescription?: {},
  customImage: {},
  customSubTitle?: {},
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
}: Props) => {
  const {
    imgUrl,
    step,
    description
  } = stepInfo
  const {
    title,
    subTitle,
    votes,
    steps
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
            styles.subTitle,
            styles[`${size}subTitle`],
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
          <Text
            style={[
              styles.description,
              styles[`${size}Description`],
              customDescription,
            ]}
          >
            {description}
          </Text>
          <Progress
            steps={steps}
            size={size}
          />
        </ImageBackground>
      </View>
      <Reaction
        votes={votes}
        size={size}
        isFavorited={false}
      />
    </View>
  )
}

Recipe.defaultProps = {
  onClick: () => {},
  customRecipe: {},
  customTitle: {},
  customDescription: {},
  customSubTitle: {},
}

export default Recipe
