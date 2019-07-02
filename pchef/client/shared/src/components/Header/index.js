// Libs
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Avatar, Provider, Menu } from 'react-native-paper'

// Common components
import Icon from '../Icon'
import Button from '../Button'

// Themes
import { COLORS, FONTS } from '../../themes'

// Styles
import styles from './styles'

// Constants
import { URL, WEB_PLATFORM } from '../../constants'

type Props = {
  data?: {
    user: {
      avatar: string,
    }
  },
  type?: string,
  onPressLogo?: () => void,
  onPressCategoryIcon?: () => void,
  onDirectTo?: (id: string) => void,
  onLayout?: (event: {
    nativeEvent: {
      layout: {
        height: number,
      },
    },
  }) => void,
  wrapperIconStyle?: Object,
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
  onDirectTo = () => {},
  onLayout = () => {},
  wrapperIconStyle,
}: Props) => {
  const [visible, setVisible] = useState(false)
  const { user: { avatar } } = data

  const handleDirectTo = URL => {
    onDirectTo(URL)
    setVisible(false)
  }

  return (
    <View
      style={[styles.wrapHeader, styles[`${type}Container`]]}
      onLayout={onLayout}
    >
      <View style={styles.container}>
        <Icon
          name="apps"
          size={type === 'secondary' ? FONTS.fontSize.extraExtraLarge : FONTS.fontSize.moreExtraLarge}
          onPress={onPressCategoryIcon}
          color={COLORS.white}
          wrapperIconStyle={wrapperIconStyle}
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
          {WEB_PLATFORM ? (
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
                                : require('../../assets/images/default_avatar.png')
                            ),
                          }}
                        />
                      </TouchableOpacity>
                    )
                  }
                >
                  <Menu.Item onPress={() => handleDirectTo(URL.PROFILE.PATH)} title={URL.PROFILE.TITLE} />
                  <Menu.Item onPress={() => handleDirectTo(URL.WISH_LIST.PATH)} title={URL.WISH_LIST.TITLE} />
                  <Menu.Item onPress={() => onDirectTo(URL.LOG_OUT.PATH)} title={URL.LOG_OUT.TITLE} />
                </Menu>
              </Provider>
            </View>
          ) : null }
        </View>
      </View>
    </View>
  )
}


export default Header
