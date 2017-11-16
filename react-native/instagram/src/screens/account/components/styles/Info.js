import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    padding: 10
  },
  avatarWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
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
