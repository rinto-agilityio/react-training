// Third party libs
import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/CommentListStyles'
import CommonStyles from '@themes/common'

const CommentList = ({ comments }) => (
  <View>
    {comments.map(comment => {
      return (
        <Text key={comment.id} style={styles.comment}>
          <Text style={CommonStyles.textBold}>{comment.owner.username}</Text>
          {': ' + comment.text}
        </Text>
      )
    })}
  </View>
)

CommentList.defaultProps = {
  comments: []
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
