import { AppRegistry } from "react-native";
import App from "./src/App";
import StorybookUI from "./storybook";

AppRegistry.registerComponent(
  "instagram",
  () => (process.env.NODE_ENV === "storybook" ? StorybookUI : App)
);
