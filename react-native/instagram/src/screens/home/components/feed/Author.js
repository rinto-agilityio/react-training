// Libs
import React from 'react'
import { View, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import CommonStyles from '@themes/common'
import styles from './styles/AuthorStyles'

const FeedAuthor = ({ avatar, username }) => (
  <View style={[styles.header, CommonStyles.layoutRow]}>
    <Image style={styles.avatar} source={{ uri: avatar }} />
    <Text>{username}</Text>
  </View>
)

FeedAuthor.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default FeedAuthor
