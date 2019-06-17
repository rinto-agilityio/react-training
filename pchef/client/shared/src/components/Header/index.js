// Libs
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Avatar, Provider, Menu } from 'react-native-paper'

// Common components
import Icon from '../Icon'
import Loading from '../Loading'
import Error from '../Error'
import Button from '../Button'

// Themes
import { COLORS, FONTS } from '../../themes'

// Styles
import styles from './styles'

// Constants
import { URL } from '../../constants/index'

type Props = {
  data: {
    user: {
      avatar: string,
    }
  },
  type?: string,
  onPressLogo?: () => void,
  onPressCategoryIcon?: () => void,
  onDirectTo: (id: string) => void,
}

const Header = ({
  type = 'primary',
  onPressLogo,
  onPressCategoryIcon,
  data = {
    user: {
      avatar: '',
    },
  },
  onDirectTo,
}: Props) => {
  const [visible, setVisible] = useState(false)
  const { user: { avatar } } = data

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
          <View style={styles.wrapUserInfo}>
            <Button
              onPress={() => onDirectTo(URL.CREATE_RECIPE.PATH)}
              title={URL.CREATE_RECIPE.TITLE}
              buttonStyle={styles.createRecipeBtn}
            />
            <Provider>
              <Menu
                style={styles.avataDropdown}
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                  (
                    <TouchableOpacity onPress={() => setVisible(true)} style={styles.logo}>
                      <Avatar.Image
                        style={styles.pipelineItemImage}
                        size={40}
                        source={{
                          uri: (
                            avatar
                              ? avatar
                              : 'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png'
                          ),
                        }}
                      />
                    </TouchableOpacity>
                  )
                }
              >
                <Menu.Item onPress={() => onDirectTo(URL.PROFILE.PATH)} title={URL.PROFILE.TITLE} />
                <Menu.Item onPress={() => onDirectTo(URL.WISH_LIST.PATH)} title={URL.WISH_LIST.TITLE} />
                <Menu.Item onPress={() => onDirectTo(URL.LOG_OUT.PATH)} title={URL.LOG_OUT.TITLE} />
              </Menu>
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
