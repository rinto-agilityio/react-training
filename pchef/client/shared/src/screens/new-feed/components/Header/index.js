// Libs
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
  image: string,
  onPressIcon?: () => void,
  size: string,
  handleTouch?: () => void,
}

const Header = ({
  image,
  onPressIcon,
  size = 'medium',
  handleTouch,
}: Props) => (
  <View
    style={[
      styles.contentHeader,
      styles[`${size}Content`],
    ]}
  >
    <Icon
      name="apps"
      size={size === 'large' ? FONTS.fontSize.extraExtraLarge : FONTS.fontSize.extraLarge}
      onClick={onPressIcon}
      color={COLORS.white}
      wrapperIconStyle={styles.wrapIcon}
    />
    <Wrapper direction="row">
      <Image
        url={image}
        customImageStyle={[
          styles.image,
          styles[`${size}Image`],
        ]}
        handleTouch={handleTouch}
      />
      <Text style={styles.text}>
        Cooking
      </Text>
    </Wrapper>
  </View>
)

Header.defaultProps = {
  onPressIcon: () => {},
  handleTouch: () => {},
}

export default Header
