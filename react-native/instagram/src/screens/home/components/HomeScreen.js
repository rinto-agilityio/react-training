// Libs
import React from 'react'
import {
  Text,
  View,
  FlatList,
  ListView,
  KeyboardAvoidingView
} from 'react-native'

// Helpers
import { NO_PHOTOS } from '@constants/messages'
import { isIOS } from '@helpers/device-info'

// Components
import PostItem from '../components/PostItem'
import Icon from '@common/components/Icon'

// Styles
import CommonStyles from '@themes/common'
import Icons from '@themes/icons'

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon style={CommonStyles.tabBarIcon} source={Icons.home} />
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

  /**
   * This for testing perfomance only
   * Should use FlatList or SectionList
   */
  _renderListView = data => {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }),
      datasource = ds.cloneWithRows(data)

    return (
      <ListView
        dataSource={datasource}
        renderRow={item => (
          <PostItem
            key={item.id}
            item={item}
            submitComment={this._addPostComment}
            toggleLike={this._toggleLike}
          />
        )}
      />
    )
  }

  /**
   * Render all items on screen
   */
  _renderFlatList = data => (
    <FlatList
      data={data}
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
  )

  render() {
    const { homeData } = this.props

    if (!homeData.length) {
      return <Text>{NO_PHOTOS}</Text>
    }

    return (
      <KeyboardAvoidingView behavior={isIOS() ? 'padding' : null}>
        {this._renderListView(homeData)}

        {/* This is hacky for auto-scroll when keyboard display on iOS */}
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    )
  }
}

export default HomeScreen
