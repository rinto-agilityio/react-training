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
  image: string,
  onClickIcon?: () => void,
  size: string,
  handleTouch?: () => void,
}

const Header = ({
  image,
  onClickIcon,
  size = '',
  handleTouch,
}: Props) => (
  <View
    style={[
      styles.contentHeader,
      styles[`${size}Content`],
    ]}
  >
    <Icon
      name="th"
      size={size === 'large' ? METRICS.fontSize.extraExtraLarge : METRICS.fontSize.extraLarge}
      onClick={onClickIcon}
      color={COLORS.white}
      wrapperIconStyle={styles.wrapIcon}
      underlayColor="transparent"
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
  onClickIcon: () => {},
  handleTouch: () => {},
}

export default Header
