import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as SearchActionCreators } from "./actions";

class SearchContainer extends React.Component {
  static navigationOptions = {
    title: "Search Screen"
  };

  componentDidMount() {}

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
