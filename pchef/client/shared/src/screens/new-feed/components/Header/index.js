// Libs
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Icon from '../../../../components/Icon'

// Themes
import { COLORS, FONTS } from '../../../../themes'

// Styles
import styles from './styles'

type Props = {
  type?: string,
  onPressLogo?: () => void,
  onPressCategoryIcon?: () => void,
}

const Header = ({
  type = 'primary',
  onPressLogo,
  onPressCategoryIcon,
}: Props) => (
  <View style={[styles.wrapHeader, styles[`${type}Container`]]}>
    <View style={styles.container}>
      <Icon
        name="apps"
        size={FONTS.fontSize.extraExtraLarge}
        onPress={onPressCategoryIcon}
        color={COLORS.white}
        wrapperIconStyle={styles.wrapIcon}
      />
      <TouchableOpacity onPress={onPressLogo} style={styles.logo}>
        <View style={[styles.imageWrapper, styles[`${type}ImageWrapper`]]}>
          <Image
            source={require('../../../../assets/images/logo.png')}
            style={[styles.image, styles[`${type}Image`]]}
          />
        </View>
        <Text style={styles.text}>Cooking</Text>
      </TouchableOpacity>
    </View>
  </View>
)

Header.defaultProps = {
  type: 'primary',
  onPressLogo: () => {},
  onPressCategoryIcon: () => {},
}

export default Header
