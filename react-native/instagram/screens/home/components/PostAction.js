import React from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet
} from "react-native";

export default class PostAction extends React.Component {
  hanleLike() {
    const { postId, userId, liked, toogleLike } = this.props;

    toogleLike({
      postId,
      userId
    });
  }

  render() {
    const likeIcon = this.props.liked
      ? require("../../../assets/icons/liked.png")
      : require("../../../assets/icons/like.png");

    return (
      <View style={styles.wrapper}>
        <TouchableHighlight onPress={() => this.hanleLike()}>
          {}
          <Image style={styles.icon} source={likeIcon} />
        </TouchableHighlight>
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
