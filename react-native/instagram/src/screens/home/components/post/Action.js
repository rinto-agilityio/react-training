// Third party libs
import React from 'react'
import { View, Image, TouchableHighlight } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/ActionStyles'
import CommonStyles from '@themes/common'
import Icons from '@themes/icons'

const PostAction = ({
  postId,
  userId,
  isLiked,
  toggleLike
}) => {
  // User like or remove liked a photo
  const handleTouchIconLike = () => {
      toggleLike({
        postId,
        userId
      })
    },
    likeIcon = isLiked ? Icons.liked : Icons.like

  return (
    <View style={CommonStyles.layoutRow}>
      <TouchableHighlight
        className="icon-like"
        onPress={() => handleTouchIconLike()}
        underlayColor="transparent"
      >
        <Image style={styles.icon} source={likeIcon} />
      </TouchableHighlight>
    </View>
  )
}

PostAction.propTypes = {
  postId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired
}

export default PostAction
