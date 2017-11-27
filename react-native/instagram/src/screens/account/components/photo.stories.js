import React from "react";
import { storiesOf } from "@storybook/react-native";

import Photo from "./Photos";

const data = [
  {
    display_url:
      "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg"
  },
  {
    display_url:
      "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg"
  },
  {
    display_url:
      "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg"
  }
];

storiesOf("AccountScreen", module).add("Photo", () => <Photo data={data} />);
