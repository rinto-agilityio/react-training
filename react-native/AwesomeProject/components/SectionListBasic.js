import React from 'react'
import { View, Text, SectionList, StyleSheet } from 'react-native'

export default class SectionListBasic extends React.Component {
  render() {
    const data = [
      {title: 'D', data: ['Devin']},
      {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
    ]
    return (
      <View style={styles.container}>
        <SectionList
          sections={data}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
