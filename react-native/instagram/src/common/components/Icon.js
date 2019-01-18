// Libs
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

const Icon = ({ style, source }) => <Image source={source} style={style} />

Icon.defaultProps = {
  style: 0
}

/**
 * Type of require file is number
 * If I use another type, it will show warning on simulator/emulator
 */
Icon.propTypes = {
  source: PropTypes.number.isRequired,
  style: PropTypes.number
}

export default Icon
