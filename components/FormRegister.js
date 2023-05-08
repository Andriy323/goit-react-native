import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Pressable,
  Platform
} from "react-native";

import { registerFormStyle } from "../styles/register-form-style";

 function FormRegister() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={registerFormStyle.container}>
    <View>
      <TextInput
        style={registerFormStyle.input}
        // onBlur={() => Keyboard.dismiss()}
        placeholder="  Логин"
      />

      <TextInput
        style={registerFormStyle.input}
        // onBlur={() => Keyboard.dismiss()}
        placeholder="  Адрес электронной почты"
      />

      <TextInput
        style={registerFormStyle.input}
        // onBlur={() => Keyboard.dismiss()}
        placeholder="  Пароль"
      />
      <Pressable style={registerFormStyle.buttonShow}>
          <Text style={registerFormStyle.textBtnShow}>Показать</Text>
        </Pressable>

      <Pressable style={registerFormStyle.button}>
        <Text style={registerFormStyle.textBtn}>Зарегистрироваться</Text>
      </Pressable>
      <Pressable style={registerFormStyle.buttonLogin}>
        <Text style={registerFormStyle.textBtnLogin}>Уже есть аккаунт? Войти</Text>
      </Pressable>
    </View>
    </KeyboardAvoidingView >
  );
}

export default FormRegister 

// const styles = StyleSheet.create({
 
//   avatars: {
//     marginTop: 175,
//     marginLeft: 140,
//     borderRadius: 16,
//     position: "absolute",
//     zIndex: 1,
//     backgroundColor: "#F6F6F6",
//     width: 120,
//     height: 120,
//   },
//   main: {
//     backgroundColor: "#7b7f85",
//     position: "relative",
//     marginTop: 235,
//     width: "100%",
//     height: 489,
//   },
//   text: {
//     color: "#212121",
//     fontSize: 30,
//     marginTop: 92,
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginBottom: 33,
//   },
//   input: {
//     backgroundColor: "#E8E8E8",
//     width: 343,
//     height: 50,
//     marginBottom: 16,
//     marginHorizontal: "8%",
//     borderRadius: 8,
//   },
//   button: {
//     marginHorizontal: "8%",
//     marginBottom: 16,
//     backgroundColor: "#FF6C00",
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
//   },
// });
