import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles/Info";

export default class Info extends React.Component {
  render() {
    const { data } = this.props;

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
