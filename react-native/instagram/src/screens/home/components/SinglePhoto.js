// Libs
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'

// Components
import PostAuthor from './PostAuthor'
import PostPhoto from './PostPhoto'
import PostFooter from './PostFooter'

class SinglePhoto extends React.Component {
  state = { showComment: false }

  _toggleCommentBox = () => {
    this.setState(prevState => ({
      showComment: !prevState.showComment
    }))
  }

  render() {
    const { showComment } = this.state,
      { item, submitComment, toggleLike } = this.props,
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
          showComment={showComment}
          submitComment={submitComment}
          toggleLike={toggleLike}
          toggleCommentBox={this._toggleCommentBox}
        />
      </View>
    )
  }
}

SinglePhoto.defaultProps = {
  item: {}
}

SinglePhoto.propTypes = {
  item: PropTypes.object.isRequired,
  submitComment: PropTypes.func,
  toggleLike: PropTypes.func
}

export default SinglePhoto
