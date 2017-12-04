// Libs
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

const Icon = ({ style, source }) => <Image style={style} source={source} />

Icon.propTypes = {
  style: PropTypes.any,
  source: PropTypes.any
}

export default Icon
