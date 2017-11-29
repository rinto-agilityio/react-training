import React from 'react'
import { View, Text, TextInput, Image } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/SinglePhoto'
import CommonStyles from '../../../themes/common'
import CommentInput from '../../../components/Comment'
import PostAction from './PostAction'
import CommentList from './CommentList'

class SinglePhoto extends React.Component {
  state = { showComment: false }

  toogleCommentBox = () => {
    this.setState(prevState => ({
      showComment: !prevState.showComment
    }))
  }

  render() {
    const { showComment } = this.state,
      { item, submitComment, toogleLike } = this.props,
      likeCounting = item.likes.length,
      isLiked = item.likes.find(i => i === item.owner.id) ? true : false

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
            isLiked={isLiked}
            postId={item.id}
            userId={item.owner.id}
            toogleLike={toogleLike}
            toogleCommentBox={this.toogleCommentBox}
          />

          {likeCounting > 1 ? (
            <Text>{likeCounting} likes</Text>
          ) : (
            <Text>{likeCounting} like</Text>
          )}

          <CommentList comments={item.comments} />

          {showComment && (
            <CommentInput
              submitComment={submitComment}
              owner={item.owner}
              postId={item.id}
            />
          )}
        </View>
      </View>
    )
  }
}

SinglePhoto.propTypes = {
  item: PropTypes.object.isRequired,
  submitComment: PropTypes.func,
  toogleLike: PropTypes.func
}

export default SinglePhoto
