// Libs
import React from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles } from './styles/InfoStyles'
import CommonStyles from '@themes/common'

const Info = ({ owner }) => (
  <View style={[styles.wrapper, CommonStyles.layoutColumn]}>
    <View style={styles.avatarWrapper}>
      <Image style={styles.avatar} source={{ uri: owner.profile_pic_url }} />
      <Text style={[styles.username, CommonStyles.textBold]}>
        {owner.username}
      </Text>
    </View>
    <Text>
      <Text style={CommonStyles.textBold}>{owner.full_name}</Text>
      {' - '}
      {owner.biography}
    </Text>
  </View>
)

Info.defaultProps = {
  owner: {}
}

Info.propTypes = {
  owner: PropTypes.object.isRequired
}

export default Info
