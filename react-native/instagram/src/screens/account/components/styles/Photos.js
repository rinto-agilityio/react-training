import { Dimensions, StyleSheet } from 'react-native';

export const numColumns = 3;
/**
 * Calculate size for each item
 */
const layoutPadding = 0,
  itemMargin = 3,
  itemSize =
    (Dimensions.get('window').width -
      layoutPadding * 2 -
      itemMargin * numColumns * 2) /
    numColumns;

export const styles = StyleSheet.create({
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
