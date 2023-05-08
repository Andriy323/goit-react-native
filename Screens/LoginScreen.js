import React from "react";
import AddPhotoSvg from "../img/svg/AddAvatarSvg";
import {
  View,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
} from "react-native";

import FormLogin from "../components/FormLogin";
import { loginStyle } from "../styles/login-style";
export default function LoginScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <ImageBackground
          source={require("../img/image/photo.jpg")}
          resizeMode="cover"
        >
          <View style={loginStyle.main}>
            <Text style={loginStyle.text}>Войти</Text>
            <FormLogin />
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
// const styles = StyleSheet.create({
//   main: {
//     backgroundColor: "#FFFFFF",
//     position: "relative",
//     marginTop: 295,
//     width: "100%",
//     height: 489,
//   },
//   text: {
//     color: "#212121",
//     fontSize: 30,
//     marginTop: 32,
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginBottom: 33,
//   },
//   addAvatar: {
//     marginTop: 81,
//     marginLeft: 107,
//   },
// });
