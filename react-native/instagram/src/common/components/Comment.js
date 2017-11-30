import React from 'react'
import { View, TextInput, Image } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/CommentStyles'

class Comment extends React.Component {
  state = { text: '' }

  /**
   * Add comment for this photo
   */
  submitComment = () => {
    const { text } = this.state
    if (text) {
      const { postId, owner, submitComment } = this.props

      submitComment({
        postId,
        owner,
        text
      })

      this.setState({ text: '' })
    }
  }

  // Reset state after unmount
  componentWillUnmount() {
    this.setState({ text: '' })
  }

  render() {
    const { owner } = this.props

    return (
      <View style={styles.comment}>
        <Image style={styles.avatar} source={{ uri: owner.profile_pic_url }} />
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this.submitComment}
        />
      </View>
    )
  }
}

Comment.propTypes = {
  postId: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  submitComment: PropTypes.func
}

export default Comment
