import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "./store/store";
import HomeContainer from "./screens/home/HomeContainer";
import AccountContainer from "./screens/account/AccountContainer";
import SearchContainer from "./screens/search/SearchContainer";

const { persistor, store } = configureStore();

const MainApp = TabNavigator(
  {
    Home: { screen: HomeContainer },
    Account: { screen: AccountContainer },
    Search: { screen: SearchContainer }
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
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainApp />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
