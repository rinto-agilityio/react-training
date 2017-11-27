import React from "react";
import { storiesOf } from "@storybook/react-native";

import { comments } from "../../../test/__mocks__/sample-data";
import CommentList from "./CommentList";

storiesOf("HomeScreen", module).add("CommentList", () => (
  <CommentList comments={comments} />
));
