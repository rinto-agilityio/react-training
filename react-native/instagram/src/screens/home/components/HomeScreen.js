// Libs
import React from 'react'
import { Text, View, FlatList, KeyboardAvoidingView } from 'react-native'

// Helpers
import { NO_PHOTOS } from '@constants/messages'

// Components
import PostItem from '../components/PostItem'
import Icon from '@common/components/Icon'

// Styles
import CommonStyles from '@themes/common'
import Icons from '@themes/icons'

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        style={CommonStyles.tabBarIcon}
        source={Icons.home}
      />
    )
  }

  // Fetching new data for Home page
  componentDidMount() {
    this.props.getHomeDataRequest()
  }

  _addPostComment = data => {
    this.props.addComment(data)
  }

  _toggleLike = data => {
    this.props.toggleLike(data)
  }

  render() {
    const { homeData } = this.props

    if (!homeData.length) {
      return <Text>{NO_PHOTOS}</Text>
    }

    return (
      <KeyboardAvoidingView behavior="padding">
        <FlatList
          data={homeData}
          renderItem={({ item }) => (
            <PostItem
              key={item.id}
              item={item}
              submitComment={this._addPostComment}
              toggleLike={this._toggleLike}
            />
          )}
          keyExtractor={(item, index) => index}
        />

        {/* This is hacky for auto-scroll when keyboard display on iOS */}
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    )
  }
}

export default HomeScreen
