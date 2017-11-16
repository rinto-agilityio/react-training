import { StyleSheet } from "react-native";
import Theme from "../../theme";

export const styles = StyleSheet.create({
  comment: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: Theme.baseSpacing
  },
  avatar: {
    height: 20,
    width: 20,
    borderRadius: 10,
    marginRight: 5
  },
  commentInput: {
    height: 30,
    paddingLeft: Theme.baseSpacing,
    borderRadius: 15,
    borderColor: Theme.borderInputColor,
    borderWidth: 1,
    width: "95%"
  }
});
