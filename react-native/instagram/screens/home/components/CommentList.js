import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CommentList extends React.Component {
  render() {
    const { comments } = this.props;

    return (
      <View>
        {comments.map(comment => {
          return (
            <Text key={comment.id}>
              <Text style={styles.username}>{comment.owner.username}</Text>
              {": " + comment.text}
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  username: {
    fontWeight: "bold",
    marginRight: 10,
    paddingRight: 10
  }
});
