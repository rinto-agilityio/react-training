import { StyleSheet } from "react-native";

import Theme from "../../../../theme";

export const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    padding: Theme.baseSpacing
  },
  footer: {
    padding: Theme.baseSpacing
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10
  },
  photo: {
    width: "100%",
    height: 300
  }
});
