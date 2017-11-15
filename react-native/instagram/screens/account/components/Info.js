import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Info extends React.Component {
  render() {
    const { data } = this.props;

    console.log("data: ", data);
    return (
      <View style={styles.wrapper}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={{ uri: data.profile_pic_url }} />
          <Text style={styles.username}>{data.username}</Text>
        </View>
        <Text>
          <Text style={styles.fullName}>{data.full_name}</Text>
          {" - "}
          {data.biography}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  username: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 28
  },
  fullName: {
    fontWeight: "bold"
  }
});
