import React from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet,
  Dimensions
} from "react-native";

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

/**
 * Calculate size for each item
 */
const layoutPadding = 0,
  numColumns = 3,
  itemMargin = 3,
  itemSize =
    (Dimensions.get("window").width -
      layoutPadding * 2 -
      itemMargin * numColumns * 2) /
    numColumns;

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    padding: layoutPadding
  },
  item: {
    margin: itemMargin,
    width: itemSize,
    height: itemSize
  }
});
