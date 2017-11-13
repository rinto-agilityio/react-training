import React from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as HomeActionCreators } from "./actions";
import SinglePhoto from "./components/SinglePhoto";

class HomeContainer extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  componentDidMount() {
    this.props.getHomeDataRequest();
  }

  render() {
    const { homeData } = this.props;

    // return <Text>No data, please upload some photos</Text>;
    return (
      <FlatList
        data={homeData}
        renderItem={({ item }) => <SinglePhoto key={item.id} item={item} />}
      />
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
