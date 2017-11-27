import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles/CommentList';
import CommonStyles from '../../../theme/common';
export default class CommentList extends React.Component {
  render() {
    const { comments } = this.props;

    return (
      <View>
        {comments.map(comment => {
          return (
            <Text key={comment.id} style={styles.comment}>
              <Text style={CommonStyles.textBold}>
                {comment.owner.username}
              </Text>
              {': ' + comment.text}
            </Text>
          );
        })}
      </View>
    );
  }
}
