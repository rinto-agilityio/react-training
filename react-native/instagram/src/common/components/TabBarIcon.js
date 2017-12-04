// Libs
import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import CommonStyles from '@themes/common'

const TabBarIcon = ({ source }) => (
  <Image style={CommonStyles.tabBarIcon} source={source} />
)

TabBarIcon.propTypes = {
  source: PropTypes.any
}

export default TabBarIcon
