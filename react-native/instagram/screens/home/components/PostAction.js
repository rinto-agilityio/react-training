import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class PostAction extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/like.png")}
        />
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/comment.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  }
});
