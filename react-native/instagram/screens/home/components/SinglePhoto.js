import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class SinglePhoto extends React.Component {
  render() {
    const { item } = this.props;
    console.log("item: ", item);

    return (
      <View>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: item.owner.profile_pic_url }}
          />
          <Text>{item.owner.username}</Text>
        </View>
        <View>
          <Image
            resizeMode={"cover"}
            style={styles.photo}
            source={{ uri: item.display_url }}
          />
        </View>
        <View>
          {item.comments.map(comment => {
            return <Text>{comment}</Text>;
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  photo: {
    width: "100%",
    height: 300
  }
});
