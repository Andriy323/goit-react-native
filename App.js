import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import FormRegister from './components/FormRegister';
export default function App() {
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <View >
      <RegistrationScreen/>
    </View>
</KeyboardAvoidingView>



    // <View style={styles.container}>
    //   <Text>Hells=o!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

