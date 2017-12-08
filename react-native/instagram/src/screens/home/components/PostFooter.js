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
  likeCounting: 0,
  comments: []
}

PostFooter.propTypes = {
  likeCounting: PropTypes.number,
  comments: PropTypes.array,
  isLiked: PropTypes.bool.isRequired,
  showComment: PropTypes.bool.isRequired,
  postId: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleCommentBox: PropTypes.func.isRequired
}

export default PostFooter
