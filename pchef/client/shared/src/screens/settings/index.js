import React from 'react'

// Components
import { View, Text, TextInput } from 'react-native'
import Button from '../../components/Button'

// styles
import styles from './styles'

type Props = {
  user: {
    id: string,
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

      <TextInput
        style={styles.settingField}
        value={name}
        editable={false}
      />

      <Text style={styles.settingLabel}>Email:</Text>
      <TextInput
        style={styles.settingField}
        value={email}
        editable={false}
      />

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
