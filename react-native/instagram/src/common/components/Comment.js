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
  _submitComment = () => {
    const { text } = this.state

    if (text) {
      const { postId, owner, submitComment } = this.props

      submitComment({
        postId,
        owner,
        text
      })

      this._resetTextInput()
    }
  }

  // Reset input value after submit or component unmount
  _resetTextInput = () => {
    this.setState({ text: '' })
  }

  render() {
    const { owner } = this.props,
          { text } = this.state

    return (
      <View style={[CommonStyles.layoutRow, styles.comment]}>
        <Image style={styles.avatar} source={{ uri: owner.profile_pic_url }} />
        <TextInput
          style={styles.commentInput}
          underlineColorAndroid="transparent"
          placeholder="Add a comment"
          value={text}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this._submitComment}
        />
      </View>
    )
  }
}

Comment.propTypes = {
  postId: PropTypes.number.isRequired,
  owner: PropTypes.object.isRequired,
  submitComment: PropTypes.func.isRequired
}

export default Comment
