// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo } from 'react'
import { View, Text } from 'react-native'

// Commons
import Wrapper from '../../../../layout/Wrapper'
import Icon from '../../../../components/Icon'
import Image from '../../../../components/Image'

// Constants and Helpers
import { formatStringToArray } from '../../../../helpers/utils'
import { SEPARATOR_SPLIT_STRING, ELLIPSIS_LINE, DEFAULT_IMAGE } from '../../../../constants/index'

// Themes
import { COLORS, FONTS } from '../../../../themes'

// Styles
import styles from './styles'

type Props = {
  recipe: {
    id: string,
    title: string,
    imgUrl: string,
    description: string,
  },
  isGrid: boolean,
  isFavorite: boolean,
  onPressIcon?: (id: string) => void | Promise<void>,
  size?: string,
  color?: string,
  handlePressImage?: () => void,
  customIconStyle: Object,
}

const Recipe = ({
  recipe,
  onPressIcon = () => {},
  size = '',
  color,
  handlePressImage,
  isGrid,
  isFavorite,
  customIconStyle,
}: Props) => {
  const { id, title, imgUrl, description } = recipe
  const formatDescription =
    formatStringToArray(description, SEPARATOR_SPLIT_STRING) || []

  return (
    <View style={[styles.recipe, isGrid ? styles[`${size}GridContent`] : styles[`${size}ListContent`]]}>
      <Text
        numberOfLines={ELLIPSIS_LINE}
        ellipsizeMode="tail"
        style={[styles.title, styles[`${size}Title`]]}
      > {title}
      </Text>
      <Wrapper direction="row" childPosition="left">
        <Image
          url={imgUrl || DEFAULT_IMAGE}
          customImageStyle={[styles.image, styles[`${size}Image`]]}
          handleTouch={handlePressImage}
        />
        <Wrapper
          direction="column"
          childPosition="middle"
          customStyles={[styles.wrapper, isGrid ? styles[`${size}GridWrapper`] : styles[`${size}Wrapper`]]}
        >
          {/* ingredient description */}
          <View style={styles.wrapperText}>
            {formatDescription.map((item, index) => (
              <Text
                numberOfLines={ELLIPSIS_LINE}
                ellipsizeMode="tail"
                key={index}
                style={styles[`${size}Text`]}
              >
                {item}
              </Text>
            ))}
          </View>

          <Icon
            wrapperIconStyle={[styles.icon, customIconStyle]}
            name="favorite"
            size={
              size === 'large'
                ? FONTS.fontSize.extraLarge
                : FONTS.fontSize.medium
            }
            onPress={() => onPressIcon(id)}
            color={isFavorite ? COLORS.red : color}
          />
        </Wrapper>
      </Wrapper>
    </View>
  )
}

Recipe.defaultProps = {
  onPressIcon: () => {},
  size: 'medium',
  color: COLORS.grayDarker,
  handlePressImage: () => {},
}

export default memo<Props>(Recipe)
