// Libs
import React from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-paper'

// Helpers
import { getPublishedTime } from '../../../../helpers/date-time'

// Styles
import styles from './styles'

// Themes
import { METRICS } from '../../../../themes'

type Props = {
  avatarUri?: string,
  name: string,
  publishedAt: number,
  text?: string,
  customStyle?: {},
  type: string,
  isGetTime?: boolean,
  customNameStyles?: {},
  customContentStyles?: {},
}

const Comment = ({
  avatarUri,
  name,
  text,
  customStyle,
  type = 'primary',
  publishedAt,
  isGetTime,
  customNameStyles,
  customContentStyles,
}: Props) => {
  // get comment published at time
  const time = getPublishedTime(publishedAt)

  // define container styles
  const containerStyle = [styles.container, customStyle]

  // define avatar size follow type
  const avatarSize = type === 'primary' ? METRICS.mediumAvatar : METRICS.largeAvatar

  return (
    <View style={containerStyle}>
      <View style={styles.userAvatar}>
        <Avatar.Image
          size={avatarSize}
          source={{
            uri: avatarUri,
          }}
        />
      </View>
      <View style={styles.commentWrapper}>
        <View style={styles.userInfo}>
          <Text style={[styles[`${type}Infor`], customNameStyles]}>
            {name}
          </Text>
          {!isGetTime && (
            <>
              <Text style={[styles.dash, styles[`${type}Infor`]]}>
                -
              </Text>
              <Text style={styles[`${type}Infor`]}>
                {time}
              </Text>
            </>
          )}
        </View>
        <Text style={[styles[`${type}Content`], customContentStyles]}>
          {isGetTime ? `on ${time}` : text}
        </Text>
      </View>
    </View>
  )
}

Comment.defaultProps = {
  avatarUri: '',
  customStyle: {},
  isGetTime: false,
  customNameStyles: {},
  customContentStyles: {},
  text: '',
}

export default Comment
