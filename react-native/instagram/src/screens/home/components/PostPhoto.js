import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/PostPhotoStyles'

const PostPhoto = ({ display_url }) => (
  <Image
    resizeMode={'cover'}
    style={styles.photo}
    source={{ uri: display_url }}
  />
)

PostPhoto.defaultProps = {
  display_url: ''
}

PostPhoto.propTypes = {
  display_url: PropTypes.string.isRequired
}

export default PostPhoto
