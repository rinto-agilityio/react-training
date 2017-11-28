import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';

import { styles } from './styles/PostAction';
import CommonStyles from '../../../themes/common';

export default class PostAction extends React.Component {
  hanleLike() {
    const { postId, userId, liked, toogleLike } = this.props;

    toogleLike({
      postId,
      userId
    });
  }

  toogleComment() {
    this.props.toogleComment();
  }

  render() {
    const likeIcon = this.props.liked
      ? require('../../../assets/icons/liked.png')
      : require('../../../assets/icons/like.png');

    return (
      <View style={CommonStyles.layoutRow}>
        <TouchableHighlight
          className="icon-like"
          onPress={() => this.hanleLike()}
          underlayColor={'transparent'}
        >
          <Image style={styles.icon} source={likeIcon} />
        </TouchableHighlight>
        <TouchableHighlight
          className="icon-comment"
          onPress={() => this.toogleComment()}
          underlayColor={'transparent'}
        >
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/comment.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
