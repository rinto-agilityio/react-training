import React from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  submitComment = () => {
    if (this.state.text) {
      const { postId, owner } = this.props;

      this.props.submitComment({
        postId: postId,
        userId: owner.id,
        text: this.state.text
      });

      this.setState({ text: "" });
    }
  };

  render() {
    const { owner } = this.props;

    return (
      <View style={styles.comment}>
        <Image style={styles.avatar} source={{ uri: owner.profile_pic_url }} />
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this.submitComment}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  comment: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 5
  },
  commentInput: {
    height: 30,
    paddingLeft: 10,
    borderRadius: 15,
    borderColor: "#a7a7a7",
    borderWidth: 1,
    width: "95%"
  }
});
