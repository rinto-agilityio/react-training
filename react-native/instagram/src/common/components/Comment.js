// Libs
import React from 'react'
import { View, TextInput, Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/CommentStyles'
import CommonStyles from '@themes/common'

class Comment extends React.Component {
  constructor() {
    super()
    this.refTextValue = null
  }

  // Reset state after unmount
  componentWillUnmount() {
    this._resetTextInput()
  }

  // Add comment for this photo
  handleSubmitComment = () => {
    const { _lastNativeText } = this.refTextValue

    if (_lastNativeText) {
      const { postId, owner, submitComment } = this.props

      submitComment({
        owner,
        postId,
        text: _lastNativeText
      })

      this._resetTextInput()
    }
  }

  // Reset TextInput value
  _resetTextInput = () => {
    this.refTextValue.clear()
  }

  render() {
    const { owner } = this.props

    return (
      <View style={[CommonStyles.layoutRow, styles.comment]}>
        <Image source={{ uri: owner.profile_pic_url }} style={styles.avatar} />
        <TextInput
          ref={text => {
            this.refTextValue = text
          }}
          onSubmitEditing={this.handleSubmitComment}
          placeholder="Add a comment"
          style={styles.commentInput}
          underlineColorAndroid="transparent"
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
