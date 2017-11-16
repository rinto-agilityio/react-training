import React from "react";
import { View, TextInput, Image } from "react-native";

import { styles } from "./styles/Comment";

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
        owner: owner,
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
