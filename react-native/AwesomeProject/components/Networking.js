import React from 'react'
import { ActivityIndicator, ListView, Text, View } from 'react-native'

export default class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    const ApiUrl = 'https://facebook.github.io/react-native/movies.json'

    return fetch(ApiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies)
        }, function() {
          // Log something here
        })
      })
      .catch((err) => {
        console.log('error: ', error);
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={
            (rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>
          }
        />
      </View>
    )
  }
}
