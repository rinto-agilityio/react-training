// Libs
import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

// Components
import PostAction from './Action'
import CommentList from './CommentList'
import CommentInput from '@common/components/Comment'

// Styles
import CommonStyles from '@themes/common'
import styles from './styles/FooterStyles'

const numberWithoutS = 1,
  FeedFooter = ({
    isLiked,
    postId,
    likeCounting,
    comments,
    submitComment,
    owner,
    toggleLike
  }) => (
    <View style={[CommonStyles.layoutColumn, styles.footer]}>
      {/* Display icon like and comment */}
      <PostAction
        isLiked={isLiked}
        postId={postId}
        userId={owner.id}
        toggleLike={toggleLike}
      />

      {/* Display like(s) number for this post */}
      <Text>
        {[
          likeCounting,
          ' like',
          likeCounting !== numberWithoutS ? 's' : ''
        ].join('')}
      </Text>

      <CommentList comments={comments} />

      <CommentInput
        submitComment={submitComment}
        owner={owner}
        postId={postId}
      />
    </View>
  )

FeedFooter.defaultProps = {
  likeCounting: 0,
  comments: []
}

FeedFooter.propTypes = {
  likeCounting: PropTypes.number,
  comments: PropTypes.array,
  isLiked: PropTypes.bool.isRequired,
  postId: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired
}

export default FeedFooter
