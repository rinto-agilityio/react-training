// Libs
import React from 'react'
import { View } from 'react-native'
import { Avatar, Badge } from 'react-native-paper'

// Styles
import TextBox from '../../../../components/TextBox'

// Themes
import { COLORS, METRICS } from '../../../../themes'

// Components
import styles from './styles'

type Props = {
  avatarUri?: string,
  customStyle?: {} | Array<{}>,
  type?: string,
  onSubmit: () => void,
  commentRef: { current: HTMLInputElement | null },
}

const CommentForm = ({
  avatarUri,
  customStyle,
  type = 'primary',
  onSubmit,
  commentRef,
}: Props) => {
  // define avatar/badge size follow type
  const avatarSize = type === 'primary' ? METRICS.mediumAvatar : METRICS.largeAvatar
  const badgeSize = type === 'primary' ? METRICS.mediumBadge : METRICS.largeBadge

  return (
    <View style={[styles.container, customStyle]}>
      <View style={styles.userAvatar}>
        <Avatar.Image
          size={avatarSize}
          source={{
            uri: avatarUri,
          }}
        />
        <Badge
          style={[styles.badgeContainer, styles[`${type}Badge`]]}
          size={badgeSize}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextBox
          placeholder="Write a new comment"
          refInput={commentRef}
          onSubmitEditing={onSubmit}
          customStyle={[styles.input, styles[`${type}Input`]]}
          placeholderTextColor={COLORS.grayNavy}
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
