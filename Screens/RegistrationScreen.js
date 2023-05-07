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
} from 'react-native';

import FormRegister from "../components/FormRegister";
export default function RegistrationScreen() {
  return (
    // <KeyboardAvoidingView
    // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View>
    <ImageBackground source={require("../img/image/photo.jpg")} resizeMode="cover" >

      <View style={styles.avatars}>
      <Pressable style={styles.addAvatar}>
        <AddPhotoSvg/>
        </Pressable>
      </View>
      <View style={styles.main}>
        <Text style={styles.text}>Регистрация</Text>
        <FormRegister/>


      </View>

      </ImageBackground>

     </View>
     </TouchableWithoutFeedback>
    //  {/* </KeyboardAvoidingView> */}

  );
}

const styles = StyleSheet.create({
  avatars: {
    marginTop: 175,
    marginLeft: 140,
    borderRadius: 16,
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
  },
  main: {
    backgroundColor: "#FFFFFF",
    position: "relative",
    marginTop: 235,
    width: "100%",
    height: 489,
  },
  text: {
    color: "#212121",
    fontSize: 30,
    marginTop: 92,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 33
  },
  addAvatar: {
   marginTop: 81,
   marginLeft: 107
  },
});
