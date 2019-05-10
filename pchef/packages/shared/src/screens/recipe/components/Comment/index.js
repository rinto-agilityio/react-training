import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getPublishedTime } from '../../../../helpers/date-time'
import styles from './styles';

// Comment props type
type Props = {
  avatarUri?: string,
  name: string,
  publishedAt: string,
  text: string,
  customStyle?: {},
  type?: 'primary' | 'secondary'
}

// component Comment
const Comment = ({
  avatarUri,
  name,
  text,
  customStyle,
  type = 'primary',
  publishedAt,
}: Props) => {
  // get comment published at time
  const time = getPublishedTime(publishedAt);

  // define container styles
  const containerStyle = [styles.container, customStyle]

  // define avatar size follow type
  const avatarSize = type === 'primary' ? 'small' : 'medium'

  return (
    <View style={containerStyle}>
      <View style={styles.userAvatar}>
        <Avatar
          rounded
          size={avatarSize}
          source={{
            uri: avatarUri,
          }}
        />
      </View>
      <View style={styles.commentWrapper}>
        <View style={styles.userInfo}>
          <Text style={styles[`${type}Infor`]}>
            {name}
          </Text>
          <Text style={[styles.dash, styles[`${type}Infor`]]}>
            -
          </Text>
          <Text style={styles[`${type}Infor`]}>
            {time}
          </Text>
        </View>
        <Text style={styles[`${type}Content`]}>
          {text}
        </Text>
      </View>
    </View>
  )
}

// component default props value
Comment.defaultProps = {
  avatarUri: '',
  customStyle: {},
  type: 'primary',
};

export default Comment;
