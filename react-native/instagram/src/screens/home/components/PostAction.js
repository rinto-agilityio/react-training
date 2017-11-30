// Third party libs
import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/PostAction'
import CommonStyles from '@themes/common'

const PostAction = ({
  postId,
  userId,
  isLiked,
  toogleLike,
  toogleCommentBox
}) => {
  // User like or remove liked on a photo
  const handleClickIconLike = () => {
    toogleLike({
      postId,
      userId
    })
  }

  // Toggle comment input on single photo
  const handleClickIconComment = () => {
    toogleCommentBox()
  }

  const likeIcon = isLiked
    ? require('@assets/icons/liked.png')
    : require('@assets/icons/like.png')

  return (
    <View style={CommonStyles.layoutRow}>
      <TouchableHighlight
        className="icon-like"
        onPress={() => handleClickIconLike()}
        underlayColor={'transparent'}
      >
        <Image style={styles.icon} source={likeIcon} />
      </TouchableHighlight>
      <TouchableHighlight
        className="icon-comment"
        onPress={() => handleClickIconComment()}
        underlayColor={'transparent'}
      >
        <Image
          style={styles.icon}
          source={require('@assets/icons/comment.png')}
        />
      </TouchableHighlight>
    </View>
  )
}

PostAction.propTypes = {
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  toogleLike: PropTypes.func,
  toogleCommentBox: PropTypes.func
}

export default PostAction
