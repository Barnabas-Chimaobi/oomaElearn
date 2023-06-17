/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/Screens/Login';
import Login2 from './src/Screens/Login2';
import LoginEror from './src/Screens/LoginError';
import SignUp2 from './src/Screens/SignUp2';
import SignUpOtp from './src/Screens/SignUpOtp';
import {Onboarding} from './src/Screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar barStyle={'dark-content'} />
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

AppRegistry.registerComponent(appName, () => App);
