// libs
import React from 'react'
import { View, Text } from 'react-native'
import Wrapper from '../../../../layout/Wrapper'
import Icon from '../../../../components/Icon'
import Image from '../../../../components/Image'

// Themes
import { COLORS, FONTS } from '../../../../themes'

// Styles
import styles from './styles'

type Props = {
  recipe: {
    id: number,
    title: string,
    imgUrl: string,
    description: string,
  },
  handlePressIcon?: () => void,
  size?: string,
  color?: string,
  handlePressImage?: () => void,
}

const Recipe = ({
  recipe,
  handlePressIcon,
  size = '',
  color,
  handlePressImage,
}: Props) => {
  const { title, imgUrl, description } = recipe

  return (
    <View style={[styles.recipe, styles[`${size}Content`]]}>
      <Text style={[styles.title, styles[`${size}Title`]]}>{title}</Text>
      <Wrapper direction="row" childPosition="left">
        <Image
          url={imgUrl}
          customImageStyle={[styles.image, styles[`${size}Image`]]}
          handleTouch={handlePressImage}
        />
        <Wrapper
          direction="column"
          childPosition="middle"
          customStyles={[styles.wrapper, styles[`${size}Wrapper`]]}
        >
          <Text style={[styles.text, styles[`${size}Text`]]}>
            {description}
          </Text>
          <Icon
            wrapperIconStyle={styles.icon}
            name="favorite-border"
            size={
              size === 'large'
                ? FONTS.fontSize.extraLarge
                : FONTS.fontSize.medium
            }
            onPress={handlePressIcon}
            color={color}
          />
        </Wrapper>
      </Wrapper>
    </View>
  )
}

Recipe.defaultProps = {
  handlePressIcon: () => {},
  size: 'medium',
  color: COLORS.grayDarker,
  handlePressImage: () => {},
}

export default Recipe
