import React from 'react'

// Components
import { View, Text } from 'react-native'
import Image from '../../../../components/Image'
import Button from '../../../../components/Button'

// Styles
import styles from './styles'

type Props = {
  user: {
    id: string,
    name: string,
    avatar: string,
  },
  handleToSetting?: () => void,
}

const Header = ({ user, handleToSetting }: Props) => {
  const { name, avatar } = user

  return (
    <View style={styles.wrapHeader}>
      <View style={styles.contentHeader}>
        <Image url={avatar} customImageStyle={styles.image} />
      </View>
      <View style={styles.user}>
        <Text style={styles.userName}>{name}</Text>
        <Button
          buttonStyle={styles.userButton}
          titleStyle={styles.userTitleButton}
          title="Edit profile"
          onPress={handleToSetting}
        />
      </View>
    </View>
  )
}

Header.defaultProps = {
  handleToSetting: () => {},
}

export default Header
