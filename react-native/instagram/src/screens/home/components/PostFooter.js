// Libs
import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

// Components
import PostAction from './PostAction'
import CommentList from './CommentList'
import CommentInput from '@common/components/Comment'

// Styles
import CommonStyles from '@themes/common'
import { styles } from './styles/PostFooterStyles'

const PostFooter = ({
  isLiked,
  postId,
  likeCounting,
  comments,
  showComment,
  submitComment,
  owner,
  toggleLike,
  toggleCommentBox
}) => (
  <View style={styles.footer}>
    {/* Display icon like and comment */}
    <PostAction
      isLiked={isLiked}
      postId={postId}
      userId={owner.id}
      toggleLike={toggleLike}
      toggleCommentBox={toggleCommentBox}
    />

    {/* Display like(s) number for this post */}
    <Text>{[likeCounting, ' like', likeCounting !== 1 ? 's' : ''].join('')}</Text>

    <CommentList comments={comments} />

    {/* Show/hide input for comment */}
    {showComment &&
      <CommentInput
        submitComment={submitComment}
        owner={owner}
        postId={postId}
      />
    }
  </View>
)

PostFooter.defaultProps = {
  isLiked: false,
  postId: 0,
  likeCounting: 0,
  comments: [],
  showComment: false,
  owner: {}
}

PostFooter.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  postId: PropTypes.number.isRequired,
  likeCounting: PropTypes.number.isRequired,
  comments: PropTypes.array.isRequired,
  showComment: PropTypes.bool.isRequired,
  owner: PropTypes.object.isRequired,
  submitComment: PropTypes.func,
  toggleLike: PropTypes.func,
  toggleCommentBox: PropTypes.func
}

export default PostFooter
