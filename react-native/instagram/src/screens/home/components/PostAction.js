import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/PostAction'
import CommonStyles from '../../../themes/common'

const PostAction = ({ postId, userId, liked, toogleLike, toogleComment }) => {
  // User like or remove liked on a photo
  const hanleLike = () => {
    toogleLike({
      postId,
      userId
    })
  }

  // Toggle comment input on single photo
  const handleComment = () => {
    toogleComment()
  }

  const likeIcon = liked
    ? require('../../../assets/icons/liked.png')
    : require('../../../assets/icons/like.png')

  return (
    <View style={CommonStyles.layoutRow}>
      <TouchableHighlight
        className="icon-like"
        onPress={() => hanleLike()}
        underlayColor={'transparent'}
      >
        <Image style={styles.icon} source={likeIcon} />
      </TouchableHighlight>
      <TouchableHighlight
        className="icon-comment"
        onPress={() => handleComment()}
        underlayColor={'transparent'}
      >
        <Image
          style={styles.icon}
          source={require('../../../assets/icons/comment.png')}
        />
      </TouchableHighlight>
    </View>
  )
}

PostAction.propTypes = {
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  toogleLike: PropTypes.func,
  toogleComment: PropTypes.func
}

export default PostAction
