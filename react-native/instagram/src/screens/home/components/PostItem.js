// Libs
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

// Components
import PostAuthor from './post/Author'
import PostPhoto from './post/Photo'
import PostFooter from './post/Footer'

const PostItem = ({ item, submitComment, toggleLike }) => {
  const likeCounting = item.likes.length,
    isLiked = !!item.likes.find(i => i === item.owner.id)

  return (
    <View>
      <PostAuthor avatar={item.owner.profile_pic_url} username={item.owner.username} />
      <PostPhoto uri={item.display_url} />
      <PostFooter
        isLiked={isLiked}
        postId={item.id}
        likeCounting={likeCounting}
        comments={item.comments}
        owner={item.owner}
        submitComment={submitComment}
        toggleLike={toggleLike}
      />
    </View>
  )
}

PostItem.propTypes = {
  item: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired
}

export default PostItem
