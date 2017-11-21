import React from "react";
import { storiesOf } from "@storybook/react-native";

import Comment from "./Comment";

// Mocking data
const owner = {
  biography: "Personal photos",
  full_name: "Huy Nguyen",
  id: 2250323280,
  profile_pic_url:
    "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg",
  username: "huyb1991"
};

storiesOf("SinglePhoto", module)
  .add("Photo", () => {})
  .add("Comment", () => <Comment owner={owner} />);
