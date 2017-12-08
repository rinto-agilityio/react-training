// Third party libs
import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/PostActionStyles'
import CommonStyles from '@themes/common'

const PostAction = ({ postId, userId, isLiked, toggleLike, toggleCommentBox }) => {
  // User like or remove liked a photo
  const _handleTouchIconLike = () => {
    toggleLike({
      postId,
      userId
    })
  }

  const likeIcon = isLiked ? require('@assets/icons/liked.png') : require('@assets/icons/like.png')

  return (
    <View style={CommonStyles.layoutRow}>
      <TouchableHighlight className="icon-like" onPress={() => _handleTouchIconLike()} underlayColor={'transparent'}>
        <Image style={styles.icon} source={likeIcon} />
      </TouchableHighlight>
      <TouchableHighlight className="icon-comment" onPress={() => toggleCommentBox()} underlayColor={'transparent'}>
        <Image style={styles.icon} source={require('@assets/icons/comment.png')} />
      </TouchableHighlight>
    </View>
  )
}

PostAction.defaultProps = {
  postId: 0,
  userId: 0,
  isLiked: false
}

PostAction.propTypes = {
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func,
  toggleCommentBox: PropTypes.func
}

export default PostAction
