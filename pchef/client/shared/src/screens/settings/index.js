// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo, useRef } from 'react'

// Components
import { View, Text, TextInput } from 'react-native'
import Button from '../../components/Button'
import TextBox from '../../components/TextBox'

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
  const refInput = useRef(null)

  const { name, email } = user

  return (
    <View style={styles.settingForm}>
      <Text style={styles.settingLabel}>User name:</Text>

      <TextBox
        style={styles.settingField}
        defaultValue={name}
        editable={false}
        refInput={refInput}
      />

      <Text style={styles.settingLabel}>Email:</Text>
      <TextBox
        style={styles.settingField}
        defaultValue={email}
        editable={false}
        refInput={refInput}
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

export default memo<Props>(Settings)
