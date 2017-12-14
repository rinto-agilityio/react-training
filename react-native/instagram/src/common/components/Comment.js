// Libs
import React from 'react'
import { View, TextInput, Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/CommentStyles'
import CommonStyles from '@themes/common'

class Comment extends React.Component {
  state = { text: '' }

  // Reset state after unmount
  componentWillUnmount() {
    this._resetTextInput()
  }

  // Add comment for this photo
  handleSubmitComment = () => {
    const { text } = this.state

    if (text) {
      const { postId, owner, submitComment } = this.props

      submitComment({
        owner,
        postId,
        text
      })

      this._resetTextInput()
    }
  }

  /* eslint-disable react/no-set-state */
  handleTextChange = text => {
    this.setState({ text })
  }

  // Reset input value after submit or component unmount
  _resetTextInput = () => {
    this.setState({ text: '' })
  }

  /* eslint-enable react/no-set-state */

  render() {
    const { owner } = this.props,
      { text } = this.state

    return (
      <View style={[CommonStyles.layoutRow, styles.comment]}>
        <Image source={{ uri: owner.profile_pic_url }} style={styles.avatar} />
        <TextInput
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.handleSubmitComment}
          placeholder="Add a comment"
          style={styles.commentInput}
          underlineColorAndroid="transparent"
          value={text}
        />
      </View>
    )
  }
}

Comment.propTypes = {
  owner: PropTypes.object.isRequired,
  postId: PropTypes.number.isRequired,
  submitComment: PropTypes.func.isRequired
}

export default Comment
