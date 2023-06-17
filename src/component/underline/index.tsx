import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../helpers/colors';

const Underline = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This text is underlined.</Text>
    </View>
  );
};

export {Underline};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textDecorationLine: 'underline',
    textDecorationColor: Colors.day_mode.white,
  },
});
