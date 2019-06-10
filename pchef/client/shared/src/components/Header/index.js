// Libs
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Avatar, Provider, Divider, Menu, Button } from 'react-native-paper'

// Common components
import Icon from '../Icon'

// Themes
import { COLORS, FONTS } from '../../themes'

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
}: Props) => {
  const [visible, setVisible] = useState(false)

  return (
    <View style={[styles.wrapHeader, styles[`${type}Container`]]}>
      <View style={styles.container}>
        <Icon
          name="apps"
          size={FONTS.fontSize.extraExtraLarge}
          onPress={onPressCategoryIcon}
          color={COLORS.white}
          wrapperIconStyle={styles.wrapIcon}
        />
        <View style={styles.wrapHeaderContent}>
          <View>
            <TouchableOpacity onPress={onPressLogo} style={styles.logo}>
              <View style={[styles.imageWrapper, styles[`${type}ImageWrapper`]]}>
                <Image
                  source={require('../../assets/images/logo.png')}
                  style={[styles.image, styles[`${type}Image`]]}
                />
              </View>
              <Text style={styles.text}>Cooking</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: 'center' }}>
            <Provider>
              <View>
                <Menu
                  style={styles.avataDropdown}
                  visible={visible}
                  onDismiss={() => setVisible(false)}
                  anchor={
                    (
                      <TouchableOpacity onPress={() => setVisible(true)} style={styles.logo}>
                        <Avatar.Image
                          style={styles.pipelineItemImage}
                          size={50}
                          source={{
                            uri: ('../../assets/images/logo.png'),
                          }}
                        />
                      </TouchableOpacity>
                    )
                  }
                >
                  <Menu.Item onPress={() => {}} title="View Profile" />
                  <Menu.Item onPress={() => {}} title="Wish List" />
                  <Menu.Item onPress={() => {}} title="Logout" />
                </Menu>
              </View>
            </Provider>
          </View>
        </View>
      </View>
    </View>
  )
}

Header.defaultProps = {
  type: 'primary',
  onPressLogo: () => {},
  onPressCategoryIcon: () => {},
}

export default Header
