import React from "react";
import { storiesOf } from "@storybook/react-native";

import CommentList from "./CommentList";

const comments = [
  {
    id: 1,
    text: "First comment",
    owner: {
      username: "user1"
    },
    id: 2,
    text: "Second comment",
    owner: {
      username: "user2"
    }
  }
];

storiesOf("HomeScreen", module).add("CommentList", () => (
  <CommentList comments={comments} />
));
