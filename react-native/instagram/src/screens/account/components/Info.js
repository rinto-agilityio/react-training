import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles/Info";
import CommonStyles from "../../../theme/common";

export default class Info extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <View style={[styles.wrapper, CommonStyles.layoutColumn]}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={{ uri: data.profile_pic_url }} />
          <Text style={[styles.username, CommonStyles.textBold]}>
            {data.username}
          </Text>
        </View>
        <Text>
          <Text style={CommonStyles.textBold}>{data.full_name}</Text>
          {" - "}
          {data.biography}
        </Text>
      </View>
    );
  }
}
