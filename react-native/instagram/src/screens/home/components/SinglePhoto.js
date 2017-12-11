// Libs
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

// Components
import PostAuthor from './PostAuthor'
import PostPhoto from './PostPhoto'
import PostFooter from './PostFooter'

class SinglePhoto extends React.Component {
  // state = { showComment: false }

  // _toggleCommentBox = () => {
  //   this.setState(prevState => ({
  //     showComment: !prevState.showComment
  //   }))
  // }

  render() {
    const { item, submitComment, toggleLike } = this.props,
      likeCounting = item.likes.length,
      isLiked = item.likes.find(i => i === item.owner.id) ? true : false

    return (
      <View>
        <PostAuthor
          avatar={item.owner.profile_pic_url}
          username={item.owner.username}
        />
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
}

SinglePhoto.propTypes = {
  item: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired
}

export default SinglePhoto
