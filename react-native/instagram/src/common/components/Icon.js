// Libs
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

const Icon = ({ style, source }) => <Image style={style} source={source} />

Icon.defaultProps = {
  style: 0
}

/**
 * Type of require file is number
 * If I use another type, it will show warning on simulator/emulator
 */
Icon.propTypes = {
  style: PropTypes.number,
  source: PropTypes.number.isRequired
}

export default Icon
