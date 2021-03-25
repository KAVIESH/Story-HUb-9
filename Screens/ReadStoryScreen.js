import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.allText}>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.headerText}>Story Hub App</Text>
        </TouchableOpacity>

        <Text style={styles.displayText}>
        1. "An Old Man Lived in the Village":
        "https://wealthygorilla.com/best-short-moral-stories/"
        </Text>
        <Text style={styles.displayText}>
        2. "The Wise Man" : "https://wealthygorilla.com/best-short-moral-stories/"
        </Text>
        <Text style={styles.displayText}>
        3. "The Foolish Donkey" : "https://wealthygorilla.com/best-short-moral-stories/"
        </Text>
         <Text style={styles.displayText}>
        4. "Having A Best Friend" : "https://wealthygorilla.com/best-short-moral-stories/"
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  allText: {
    backgroundColor: 'lightgreen',
    flex: 1,
    fontFamily: 'comic sans ms',
  },
  header: {
    backgroundColor: 'blue',
    border: 'dashed',
  },
  headerText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'Eras Bold ITC',
    fontSize: 20,
    padding: 15,
  },
});
