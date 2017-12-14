// Libs
import { FlatList, KeyboardAvoidingView, ListView, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import React from 'react'

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
    tabBarIcon: () => <Icon source={Icons.home} style={CommonStyles.tabBarIcon} />
  }

  // Fetching new data for Home page
  componentDidMount() {
    const { getHomeDataRequest } = this.props

    getHomeDataRequest()
  }

  _addPostComment = data => {
    const { addComment } = this.props

    addComment(data)
  }

  _toggleLike = data => {
    const { toggleLike } = this.props

    toggleLike(data)
  }

  /**
   * This for testing perfomance only. Should use FlatList or SectionList
   * @param {array} data - List feeds
   * @returns {component} - List PostItem component
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
   * @param {array} data - List feeds
   * @returns {component} - List PostItem component
   */
  _renderFlatList = data => (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <PostItem
          key={item.id}
          item={item}
          submitComment={this._addPostComment}
          toggleLike={this._toggleLike}
        />
      )}
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
        <View style={CommonStyles.keyboardPadding} />
      </KeyboardAvoidingView>
    )
  }
}

HomeScreen.propTypes = {
  addComment: PropTypes.func.isRequired,
  getHomeDataRequest: PropTypes.func.isRequired,
  homeData: PropTypes.array.isRequired,
  toggleLike: PropTypes.func.isRequired
}

export default HomeScreen
