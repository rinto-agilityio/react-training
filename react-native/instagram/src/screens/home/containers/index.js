// Libs
import React from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { Creators as HomeActionCreators } from '../actions'
import { NO_PHOTOS } from '@constants/messages'

// Components
import SinglePhoto from '../components/SinglePhoto'
import Icon from '@common/components/Icon'

// Styles
import CommonStyles from '@themes/common'

class HomeContainer extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Icon
        style={CommonStyles.tabBarIcon}
        source={require('@assets/icons/home.png')}
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
      <FlatList
        data={homeData}
        renderItem={({ item }) => (
          <SinglePhoto
            key={item.id}
            item={item}
            submitComment={this._addPostComment}
            toggleLike={this._toggleLike}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...HomeActionCreators
    },
    dispatch
  )
}

const mapStateToProps = state => {
  return {
    homeData: state.home.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
