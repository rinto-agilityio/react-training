import { StyleSheet } from "react-native";

import Theme from "../../../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    padding: Theme.baseSpacing
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Theme.baseSpacing
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  username: {
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 28
  },
  fullName: {
    fontWeight: "bold"
  }
});
