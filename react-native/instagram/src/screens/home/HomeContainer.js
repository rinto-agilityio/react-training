// Third party libs
import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Helpers
import { Creators as HomeActionCreators } from './actions'

// Components
import SinglePhoto from './components/SinglePhoto'

// Styles
import CommonStyles from '@themes/common'

class HomeContainer extends React.Component {
  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('@assets/icons/home.png')}
        style={CommonStyles.tabBarIcon}
      />
    )
  }

  componentDidMount() {
    this.props.getHomeDataRequest()
  }

  addPostComment = data => {
    this.props.addComment(data)
  }

  toogleLike = data => {
    this.props.toogleLike(data)
  }

  render() {
    const { homeData } = this.props

    if (!homeData.length) {
      return <Text>No data, please upload some photos</Text>
    }

    return (
      <FlatList
        data={homeData}
        renderItem={({ item }) => (
          <SinglePhoto
            key={item.id}
            item={item}
            submitComment={this.addPostComment}
            toogleLike={this.toogleLike}
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
