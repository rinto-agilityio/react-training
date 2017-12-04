// Libs
import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { Creators as HomeActionCreators } from './actions'

// Components
import SinglePhoto from './components/SinglePhoto'
import TabBarIcon from '@common/components/TabBarIcon'

class HomeContainer extends React.Component {
  /* 
   * Can't create common component for icon, error with source props
   * navigationOptions.tabBarIcon not allow to import custom component
   */
  static navigationOptions = {
    tabBarIcon: () => <TabBarIcon source={require('@assets/icons/home.png')} />
  }

  // Fetching new data for Home page
  componentDidMount() {
    this.props.getHomeDataRequest()
  }

  _addPostComment = data => {
    this.props.addComment(data)
  }

  _toogleLike = data => {
    this.props.toogleLike(data)
  }

  render() {
    const { homeData } = this.props

    if (!homeData.length) {
      return <Text>{MESSAGE_NODATA}</Text>
    }

    return (
      <FlatList
        data={homeData}
        renderItem={({ item }) => (
          <SinglePhoto
            key={item.id}
            item={item}
            submitComment={this._addPostComment}
            toogleLike={this._toogleLike}
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
