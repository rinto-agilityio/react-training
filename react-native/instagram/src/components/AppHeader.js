import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.brand}>Instagram</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  brand: {
    fontSize: 24
  }
});
