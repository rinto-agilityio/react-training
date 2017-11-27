import React from 'react';
import { View, Image, Text, FlatList } from 'react-native';

import { styles, numColumns } from './styles/Photos';

export default class Photos extends React.Component {
  render() {
    const { data } = this.props;

    return (
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
  }
}
