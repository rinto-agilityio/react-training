// Libs
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import styles from './styles/PhotoStyles'

const FeedPhoto = ({ uri }) => (
  <Image resizeMode="cover" style={styles.photo} source={{ uri }} />
)

FeedPhoto.defaultProps = {
  uri: ''
}

FeedPhoto.propTypes = {
  uri: PropTypes.string
}

export default FeedPhoto
