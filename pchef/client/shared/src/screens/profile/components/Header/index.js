import React from 'react'

// Components
import { View, Text, Platform } from 'react-native'
import Image from '../../../../components/Image'
import Button from '../../../../components/Button'

// Styles
import styles from './styles'

type Props = {
  user: {
    name: string,
    avatar: string,
  },
  handleToSetting?: () => void,
}

const Header = ({ user, handleToSetting = () => {} }: Props) => {
  const { name, avatar } = user
  const isMobile = Platform.OS !== 'web'
  const defaultAvatar =
    'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png'

  return (
    <>
      {isMobile ? (
        <View style={styles.wrapHeader}>
          <View style={[styles.contentHeader, styles.container]}>
            <Image
              url={avatar ? avatar : defaultAvatar}
              customImageStyle={styles.image}
            />
          </View>
        </View>
      ) : null}
      <View style={[styles.user, styles.container]}>
        <Text style={styles.userName}>{name}</Text>
        <Button
          buttonStyle={styles.userButton}
          titleStyle={styles.userTitleButton}
          title="View profile"
          onPress={handleToSetting}
        />
      </View>
    </>
  )
}

export default Header
