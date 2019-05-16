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
    image: string,
    description: string,
  },
  handlePressIcon?: () => void,
  sizeType?: string,
  color?: string,
  handlePressImage?: () => void,
}

const Recipe = ({
  recipe,
  handlePressIcon,
  sizeType = '',
  color,
  handlePressImage,
}: Props) => {
  const { title, image, description } = recipe

  return (
    <View style={[styles.recipe, styles[`${sizeType}Content`]]}>
      <Text style={[styles.title, styles[`${sizeType}Title`]]}>{title}</Text>
      <Wrapper direction="row" childPosition="left">
        <Image
          url={image}
          customImageStyle={[styles.image, styles[`${sizeType}Image`]]}
          handleTouch={handlePressImage}
        />
        <Wrapper
          direction="column"
          childPosition="middle"
          customStyles={[styles.wrapper, styles[`${sizeType}Wrapper`]]}
        >
          <Text style={[styles.text, styles[`${sizeType}Text`]]}>
            {description}
          </Text>
          <Icon
            wrapperIconStyle={styles.icon}
            name="favorite-border"
            size={
              sizeType === 'large'
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
  sizeType: 'medium',
  color: COLORS.grayDarker,
  handlePressImage: () => {},
}

export default Recipe
