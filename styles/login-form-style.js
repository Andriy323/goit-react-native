import { StyleSheet } from "react-native";
export const loginFormStyle = StyleSheet.create({
  input: {
    backgroundColor: "#E8E8E8",
    width: 343,
    height: 50,
    marginBottom: 16,
    gap: 16,
    rowGap: 16,
    marginHorizontal: "8%",
    borderRadius: 8,
  },

  button: {
    marginHorizontal: "8%",
    backgroundColor: "#FF6C00",
    marginTop: 27,
    borderRadius: 100,
    width: 343,
    height: 51,
  },
  textBtn: {
    color: "#FFF",
    textAlign: "center",
    paddingTop: 16,
  },
  textBtnLogin: {
    color: "#1B4371",
    textAlign: "center",
    marginBottom: 144,
  },

  buttonLogin: {
    marginTop: 16,
  },
  buttonShow: {
    position: "absolute",
    top: 80,
    // left: 300
    marginLeft: 295
  },
  textBtnShow: {
    color: "#1B4371"
  }
});
