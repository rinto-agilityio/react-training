import React from "react";
import { Text, View, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as AccountActionCreators } from "./actions";

class AccountContainer extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require("../../assets/icons/avatar.png")}
        style={{ width: 24, height: 24 }}
      />
    )
  };

  componentDidMount() {
    this.props.loadAccountData();
  }

  render() {
    const { accountData } = this.props;

    return (
      <View>
        <Text>This is AccountContainer</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...AccountActionCreators
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    accountData: state.account
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
