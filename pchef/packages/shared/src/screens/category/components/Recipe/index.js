// libs
import React from 'react'
import { View, Text } from 'react-native'
import Wrapper from '../../../../layout/Wrapper'
import Icon from '../../../../components/Icon'
import Image from '../../../../components/Image'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Styles
import styles from './styles'

type Props = {
  title?: string,
  image: string,
  description?: string,
  onClickIcon?: () => void,
  size?: string,
  color?: string,
  handleTouch?: () => void,
}

const Recipe = ({
  title,
  image,
  description,
  onClickIcon,
  size = '',
  color,
  handleTouch,
}: Props) => (
  <View style={[
    styles[`${size}Content`],
  ]}
  >
    <Text
      style={[
        styles.title,
        styles[`${size}Title`],
      ]}
    >
      {title}
    </Text>
    <Wrapper direction="row" childPosition="left">
      <Image
        url={image}
        customImageStyle={[
          styles.image,
          styles[`${size}Image`],
        ]}
        handleTouch={handleTouch}
      />
      <Wrapper
        direction="column"
        childPosition="middle"
        customStyles={[
          styles.wrapper,
          styles[`${size}Wrapper`],
        ]}
      >
        <Text style={[styles.text, styles[`${size}Text`]]}>{description}</Text>
        <Icon
          wrapperIconStyle={styles.icon}
          name="heart"
          size={
            size === 'large' ? METRICS.fontSize.extraLarge : METRICS.fontSize.medium
          }
          onClick={onClickIcon}
          color={color}
        />
      </Wrapper>
    </Wrapper>
  </View>
)

Recipe.defaultProps = {
  title: '',
  description: '',
  onClickIcon: () => {},
  size: 'medium',
  color: COLORS.grayDarker,
  handleTouch: () => {},
}

export default Recipe
