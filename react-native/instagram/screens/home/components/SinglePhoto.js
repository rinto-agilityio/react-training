import React from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

import CommentInput from "../../../components/Comment";
import PostAction from "./PostAction";
import CommentList from "./CommentList";

export default class SinglePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComment: false
    };
  }

  toogleComment = () => {
    this.setState({
      showComment: !this.state.showComment
    });
  };

  render() {
    const { item, submitComment, toogleLike } = this.props,
      likeCounting = item.likes.length,
      liked = item.likes.find(i => i === item.owner.id);

    return (
      <View>
        <View style={styles.header}>
          <Image
            style={styles.avatar}
            source={{ uri: item.owner.profile_pic_url }}
          />
          <Text>{item.owner.username}</Text>
        </View>
        <Image
          resizeMode={"cover"}
          style={styles.photo}
          source={{ uri: item.display_url }}
        />
        <View style={styles.footer}>
          <PostAction
            liked={liked ? true : false}
            postId={item.id}
            userId={item.owner.id}
            toogleLike={toogleLike}
            toogleComment={this.toogleComment}
          />
          {likeCounting > 1 ? (
            <Text>{likeCounting} likes</Text>
          ) : (
            <Text>{likeCounting} like</Text>
          )}
          <CommentList comments={item.comments} />
          {this.state.showComment && (
            <CommentInput
              submitComment={submitComment}
              owner={item.owner}
              postId={item.id}
            />
          )}
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
  footer: {
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
