import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as HomeActionCreators } from "./actions";

class HomeContainer extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  componentDidMount() {
    this.props.getHomeDataRequest();
  }

  render() {
    const { homeData } = this.props;

    return (
      <View>
        <Text>This is HomeContainer</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...HomeActionCreators
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    homeData: state.home.data
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
