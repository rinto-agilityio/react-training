import React from 'react'

// Themes
import { COLORS } from 'shared/src/themes'

// Components
import { View, Text } from 'react-native'
import TextBox from '../../components/TextBox'
import Button from '../../components/Button'
import Icon from '../../components/Icon'

// styles
import styles from './styles'

type Props = {
  user: {
    name: string,
    country: string,
    description: string,
    instagramUrl: string,
    youtubeUrl: string,
    webUrl: string,
  },
  handleLogout?: () => void,
  refInput: { current: HTMLInputElement | null },
}

const Settings = ({ user, handleLogout, refInput }: Props) => {
  const { name, country, description, instagramUrl, youtubeUrl, webUrl } = user

  return (
    <View style={styles.settingForm}>
      <Text style={styles.settingLabel}>What's your full name?</Text>
      <TextBox
        defaultValue={name}
        placeholderTextColor={COLORS.brown}
        numberOfLines={1}
        editable={false}
        customStyle={styles.settingInput}
        refInput={refInput}
      />

      <Text style={styles.settingLabel}>Where do you live?</Text>
      <TextBox
        defaultValue={country}
        placeholderTextColor={COLORS.brown}
        numberOfLines={1}
        editable={false}
        customStyle={styles.settingInput}
        refInput={refInput}
      />

      <Text style={styles.settingLabel}>Description</Text>
      <TextBox
        defaultValue={description}
        placeholderTextColor={COLORS.brown}
        numberOfLines={1}
        editable={false}
        customStyle={styles.settingInput}
        refInput={refInput}
      />

      <Icon
        label={instagramUrl}
        name="instagram"
        customStyle={styles.settingUrl}
      />
      <Icon
        label={youtubeUrl}
        name="youtube-square"
        customStyle={styles.settingUrl}
      />
      <Icon label={webUrl} name="globe" customStyle={styles.settingUrl} />

      <Button
        title="Logout"
        onClick={handleLogout}
        buttonStyle={styles.settingButton}
      />
    </View>
  )
}

Settings.defaultProps = {
  handleLogout: () => {},
}

export default Settings
