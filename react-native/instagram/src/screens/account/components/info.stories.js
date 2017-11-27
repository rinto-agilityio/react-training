import React from "react";
import { storiesOf } from "@storybook/react-native";

import { user } from "../../../test/__mocks__/sample-data";
import Info from "./Info";

storiesOf("AccountScreen", module).add("Info", () => <Info data={user} />);
