import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  comment: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 5
  },
  commentInput: {
    height: 30,
    paddingLeft: 10,
    borderRadius: 15,
    borderColor: "#a7a7a7",
    borderWidth: 1,
    width: "95%"
  }
});
