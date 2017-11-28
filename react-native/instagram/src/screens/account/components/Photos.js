import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { styles, numColumns } from './styles/Photos';

const Photos = ({ data }) => (
  <View style={styles.list}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Image style={styles.item} source={{ uri: item.display_url }} />
      )}
      keyExtractor={(item, index) => index}
      numColumns={numColumns}
    />
  </View>
);

Photos.propTypes = {
  data: PropTypes.array.isRequired
};

export default Photos;
