import React from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import PropTypes from 'prop-types';

import { styles } from './styles/SinglePhoto';
import CommonStyles from '../../../themes/common';
import CommentInput from '../../../components/Comment';
import PostAction from './PostAction';
import CommentList from './CommentList';

class SinglePhoto extends React.Component {
  constructor() {
    super();
    this.state = {
      showComment: false
    };
  }

  toogleComment = () => {
    this.setState({
      showComment: !this.state.showComment
    });
  };

  render() {
    const { item, submitComment, toogleLike } = this.props,
      likeCounting = item.likes.length,
      liked = item.likes.find(i => i === item.owner.id);

    return (
      <View>
        <View style={[styles.header, CommonStyles.layoutRow]}>
          <Image
            style={styles.avatar}
            source={{ uri: item.owner.profile_pic_url }}
          />
          <Text>{item.owner.username}</Text>
        </View>

        <Image
          resizeMode={'cover'}
          style={styles.photo}
          source={{ uri: item.display_url }}
        />

        <View style={styles.footer}>
          <PostAction
            liked={liked ? true : false}
            postId={item.id}
            userId={item.owner.id}
            toogleLike={toogleLike}
            toogleComment={this.toogleComment}
          />

          {likeCounting > 1 ? (
            <Text>{likeCounting} likes</Text>
          ) : (
            <Text>{likeCounting} like</Text>
          )}

          <CommentList comments={item.comments} />

          {this.state.showComment && (
            <CommentInput
              submitComment={submitComment}
              owner={item.owner}
              postId={item.id}
            />
          )}
        </View>
      </View>
    );
  }
}

SinglePhoto.propTypes = {
  item: PropTypes.object.isRequired,
  submitComment: PropTypes.func,
  toogleLike: PropTypes.func
};

export default SinglePhoto;
