import React from 'react'
import { View } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import { COLORS } from '../../../../themes'
import TextBox from '../../../../components/TextBox'
import styles from './styles'

// Comment form props type
type Props = {
  avatarUri?: string,
  customStyle?: {} | Array<{}>,
  type?: string,
  onSubmit: () => void,
  commentRef: { current: HTMLInputElement | null },
}

// component Comment Form
const CommentForm = ({
  avatarUri,
  customStyle,
  type = 'primary',
  onSubmit,
  commentRef,
}: Props) => {
  // define avatar size follow type
  const avatarSize = type === 'primary' ? 'small' : 'medium'

  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.userAvatar}>
        <Avatar
          rounded
          size={avatarSize}
          source={{
            uri: avatarUri,
          }}
        />
        <Badge
          status="success"
          containerStyle={styles.badgeContainer}
          badgeStyle={styles[`${type}Badge`]}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextBox
          placeholder="Write a new comment"
          refInput={commentRef}
          onSubmitEditing={onSubmit}
          customStyle={[styles.input, styles[`${type}Input`]]}
          placeholderTextColor={COLORS.gray}
        />
      </View>
    </View>
  )
}

CommentForm.defaultProps = {
  avatarUri: '',
  customStyle: {},
  type: 'primary',
}

export default CommentForm
