/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/Screens/auth/Login';
import Login2 from './src/Screens/Login2';
import LoginEror from './src/Screens/LoginError';
// import SignUp2 from './src/Screens/auth/SignUp';
import SignUpOtp from './src/Screens/SignUpOtp';
import {
  Onboarding,
  SignUp,
  InitSignUp,
  OTP,
  SignUp2,
  ForgotPassword,
  ResetPassword,
  BeginIntro,
  SelectGender,
  AgeRange,
  Goals,
  Profile,
  EditProfile,
  Discover,
  TopCourseList,
} from './src/Screens';
import {NativeBaseProvider, extendTheme} from 'native-base';

const customTheme = extendTheme({
  colors: {
    customPrimary: {
      50: '#f5f8fd',
      100: '#eaf0fa',
      200: '#d4dcef',
      300: '#bdc7e4',
      400: '#95a0cf',
      500: '#6d79ba',
      600: '#606a9f',
      700: '#4d537d',
      800: '#3a3f5b',
      900: '#282e3a',
    },
    customSecondary: '#ff6347',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <TopCourseList />
    </NativeBaseProvider>
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
