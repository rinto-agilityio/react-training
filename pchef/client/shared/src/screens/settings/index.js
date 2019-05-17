import React from 'react'

// Components
import { View, Text } from 'react-native'
import Button from '../../components/Button'

// styles
import styles from './styles'

type Props = {
  user: {
    id: Number,
    name: string,
    email: string,
  },
  handleLogout?: () => void,
}

const Settings = ({ user, handleLogout }: Props) => {
  const { name, email } = user

  return (
    <View style={styles.settingForm}>
      <Text style={styles.settingLabel}>User name:</Text>
      <Text style={styles.settingField}>{name}</Text>

      <Text style={styles.settingLabel}>Email:</Text>
      <Text style={styles.settingField}>{email}</Text>

      <Button
        title="Logout"
        onPress={handleLogout}
        buttonStyle={styles.settingButton}
      />
    </View>
  )
}

Settings.defaultProps = {
  handleLogout: () => {},
}

export default Settings
