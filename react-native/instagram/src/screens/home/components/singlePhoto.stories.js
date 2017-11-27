import React from "react";
import { storiesOf } from "@storybook/react-native";

import SinglePhoto from "./SinglePhoto";

const item = {
  id: 1,
  display_url:
    "https://instagram.fdad3-2.fna.fbcdn.net/t51.2885-15/e35/23969816_557311887943572_6439408127174508544_n.jpg",
  comments: [],
  likes: [],
  owner: {
    profile_pic_url:
      "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg",
    username: "user01",
    biography: "React-Native developer"
  }
};

storiesOf("HomeScreen", module).add("SinglePhoto", () => (
  <SinglePhoto item={item} />
));
