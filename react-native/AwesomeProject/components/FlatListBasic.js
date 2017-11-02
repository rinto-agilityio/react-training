import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

export default class FlatListBasic extends React.Component {
  render() {
    const data = [
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'}
    ]

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={
            ({item}) => <Text style={styles.item}>{item.key}</Text>
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
