// Libs
import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import CommonStyles from '@themes/common'
import { styles } from './styles/PostAuthorStyles'

const PostAuthor = ({ avatar, username }) =>
  <View style={[styles.header, CommonStyles.layoutRow]}>
    <Image style={styles.avatar} source={{ uri: avatar }} />
    <Text>{username}</Text>
  </View>

PostAuthor.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PostAuthor
