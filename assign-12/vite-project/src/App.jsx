import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native'; 
import React, { useState } from 'react';

export default function App() {
  const [Fname, setName] = useState('Your First Name');
  const [Lname, setLname] = useState('Your Last Name');
  const [Age, setAge] = useState('Your Age');
  return (
    <View style={styles.containter}>
      <Text>First Name: {Fname} </Text>
      <Text>Last Name: {Lname} </Text>
      <Text>Age: {Age} </Text>
    </View>
  );
}
