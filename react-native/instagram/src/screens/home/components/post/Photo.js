// Libs
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/PhotoStyles'

const PostPhoto = ({ uri }) => (
  <Image
    resizeMode={'cover'}
    style={styles.photo}
    source={{ uri: uri }}
  />
)

PostPhoto.defaultProps = {
  uri: ''
}

PostPhoto.propTypes = {
  uri: PropTypes.string
}

export default PostPhoto
