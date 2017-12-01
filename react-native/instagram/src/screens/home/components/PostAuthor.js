import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import CommonStyles from '@themes/common'
import { styles } from './styles/PostAuthorStyles'

const PostAuthor = ({ profile_pic_url, username }) => (
  <View style={[styles.header, CommonStyles.layoutRow]}>
    <Image style={styles.avatar} source={{ uri: profile_pic_url }} />
    <Text>{username}</Text>
  </View>
)

PostAuthor.defaultProps = {
  profile_pic_url: '',
  username: ''
}

PostAuthor.propTypes = {
  profile_pic_url: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PostAuthor
