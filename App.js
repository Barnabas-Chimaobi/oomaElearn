import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screens/Login';
import Login2 from './Screens/Login2';
import LoginEror from './Screens/LoginError';
import SignUp2 from './Screens/SignUp2';
import SignUpOtp from './Screens/SignUpOtp';
import SignUpDetails from './Screens/SignUpDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpDetails/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
