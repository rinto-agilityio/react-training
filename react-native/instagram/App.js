import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "./store/store";
import HomeContainer from "./screens/home/HomeContainer";
import AccountContainer from "./screens/account/AccountContainer";
import SearchContainer from "./screens/search/SearchContainer";
import UploadContainer from "./screens/upload/UploadContainer";

const { persistor, store } = configureStore();

const MainApp = TabNavigator(
  {
    Home: { screen: HomeContainer },
    Search: { screen: SearchContainer },
    Upload: { screen: UploadContainer },
    Account: { screen: AccountContainer }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#e91e63"
    }
  }
);

export default class App extends React.Component {
  _onNavigationStateChange = (prevState, newState) => {
    this.setState({ ...this.state, route_index: newState.index });
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <MainApp
              onNavigationStateChange={this._onNavigationStateChange}
              screenProps={this.state}
            />
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
