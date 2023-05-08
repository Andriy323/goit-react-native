import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
  Platform,
} from "react-native";
import { loginFormStyle } from "../styles/login-form-style";
function FormLogin() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={loginFormStyle.container}
    >
      <View>
        <TextInput
          style={loginFormStyle.input}
          // onBlur={() => Keyboard.dismiss()}
          placeholder="  Адрес электронной почты"
        />

        <TextInput
          style={loginFormStyle.input}
          // onBlur={() => Keyboard.dismiss()}
          placeholder="  Пароль"
        />
<Pressable style={loginFormStyle.buttonShow}>
          <Text style={loginFormStyle.textBtnShow}>Показать</Text>
        </Pressable>


        <Pressable style={loginFormStyle.button}>
          <Text style={loginFormStyle.textBtn}>Войти</Text>
        </Pressable>
        <Pressable style={loginFormStyle.buttonLogin}>
          <Text style={loginFormStyle.textBtnLogin}>
            Нет аккаунта? Зарегистрироваться
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

export default FormLogin;

// const styles = StyleSheet.create({
//   input: {
//     backgroundColor: "#E8E8E8",
//     width: 343,
//     height: 50,
//     marginBottom: 16,
//     gap: 16,
//     rowGap: 16,
//     marginHorizontal: "8%",
//     borderRadius: 8,
//   },

//   button: {
//     marginHorizontal: "8%",
//     backgroundColor: "#FF6C00",
//     marginTop: 27,
//     borderRadius: 100,
//     width: 343,
//     height: 51,
//   },
//   textBtn: {
//     color: "#FFF",
//     textAlign: "center",
//     paddingTop: 16,
//   },
//   textBtnLogin: {
//     color: "#1B4371",
//     textAlign: "center",
//     marginBottom: 144,
//   },

//   buttonLogin: {
//     marginTop: 16,
//   },
// });
