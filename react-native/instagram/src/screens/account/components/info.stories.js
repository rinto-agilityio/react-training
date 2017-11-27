import React from "react";
import { storiesOf } from "@storybook/react-native";

import Info from "./Info";

const data = {
  profile_pic_url:
    "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg",
  username: "user01",
  biography: "React-Native developer"
};

storiesOf("AccountScreen", module).add("Info", () => <Info data={data} />);
