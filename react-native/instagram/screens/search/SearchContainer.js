import React from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as SearchActionCreators } from "./actions";

class SearchContainer extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/icons/search.png")}
        style={{ width: 24, height: 24 }}
      />
    )
  };

  render() {
    const { searchData } = this.props;

    return (
      <View>
        <Text>This is SearchContainer</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...SearchActionCreators
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    searchData: state.search
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
