import React from 'react'
import { View, TextInput, Image } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from './styles/Comment'

class Comment extends React.Component {
  constructor() {
    super()
    this.state = { text: '' }
  }

  submitComment = () => {
    if (this.state.text) {
      const { postId, owner, submitComment } = this.props

      submitComment({
        postId: postId,
        owner: owner,
        text: this.state.text
      })

      this.setState({ text: '' })
    }
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
