// Libs
import React from 'react'
import { View, Image, Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'

// Styles
import { styles, numColumns } from './styles/PhotosStyles'

const Photos = ({ photos }) => (
  <View style={styles.list}>
    <FlatList
      data={photos}
      renderItem={({ item }) => (
        <Image
          style={styles.item}
          source={{ uri: item.display_url }}
        />
      )}
      keyExtractor={(item, index) => index}
      numColumns={numColumns}
    />
  </View>
)

Photos.defaultProps = {
  photos: []
}

Photos.propTypes = {
  photos: PropTypes.array
}

export default Photos
