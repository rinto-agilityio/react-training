import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getAccountPhotos } from "../../helpers/account-data";
import { Creators as AccountActionCreators } from "./actions";
import Info from "./components/Info";
import Photos from "./components/Photos";

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
    const { accountData, allPhotos } = this.props,
      myPhotos = getAccountPhotos(allPhotos, accountData);

    return (
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <Info data={accountData} />
        </View>
        <Photos data={myPhotos} />
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
    accountData: state.account,
    allPhotos: state.home.data
  };
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column"
  },
  info: {
    height: 150,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer);
