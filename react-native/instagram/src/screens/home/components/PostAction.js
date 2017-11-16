import React from "react";
import { View, Text, Image, TouchableHighlight } from "react-native";

import { styles } from "./styles/PostAction";

export default class PostAction extends React.Component {
  hanleLike() {
    const { postId, userId, liked, toogleLike } = this.props;

    toogleLike({
      postId,
      userId
    });
  }

  toogleComment() {
    this.props.toogleComment();
  }

  render() {
    const likeIcon = this.props.liked
      ? require("../../../assets/icons/liked.png")
      : require("../../../assets/icons/like.png");

    return (
      <View style={styles.wrapper}>
        <TouchableHighlight
          onPress={() => this.hanleLike()}
          underlayColor={"transparent"}
        >
          <Image style={styles.icon} source={likeIcon} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => this.toogleComment()}
          underlayColor={"transparent"}
        >
          <Image
            style={styles.icon}
            source={require("../../../assets/icons/comment.png")}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
