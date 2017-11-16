import { StyleSheet } from "react-native";
import Theme from "../../theme";

export const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingTop: 20,
    paddingBottom: Theme.baseSpacing,
    backgroundColor: Theme.navigatorBgColor,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Theme.borderColor
  },
  brand: {
    fontSize: 24
  }
});
