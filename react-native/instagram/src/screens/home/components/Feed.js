// Libs
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

// Components
import FeedAuthor from './feed/Author'
import FeedPhoto from './feed/Photo'
import FeedFooter from './feed/Footer'

const Feed = ({ item, submitComment, toggleLike }) => {
  const likeCounting = item.likes.length,
    isLiked = !!item.likes.find(userId => userId === item.owner.id)

  return (
    <View>
      <FeedAuthor
        avatar={item.owner.profile_pic_url}
        username={item.owner.username}
      />
      <FeedPhoto uri={item.display_url} />
      <FeedFooter
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

Feed.propTypes = {
  item: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired
}

export default Feed
