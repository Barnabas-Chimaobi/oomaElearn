import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SignInWithGoogle() {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image
          source={require('../assets/images/googleIcon.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.text}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#D7D7D7',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 27.5,
    paddingRight: 23.5,
    gap: 16,
  },
  googleIcon: {
    width: 48,
    height: 48,
  },
  text: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
  },
});
