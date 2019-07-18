// @flow
// add flow above to fix for using flow with React.memo

// Libs
import React, { memo, useRef } from 'react'
import whyDidYouRender from '@welldone-software/why-did-you-render'

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
  handleLogout: () => void,
}

if (process.env.NODE_ENV !== 'production') {
  whyDidYouRender(React, {
    onlyLogs: true,
    titleColor: 'green',
    diffNameColor: 'aqua',
  })
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

Settings.whyDidYouRender = true

export default memo<Props>(Settings)
