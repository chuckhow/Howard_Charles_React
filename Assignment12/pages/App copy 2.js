import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native'; 
import React, { useState } from 'react';

export default function App() {
  const [Fname, setName] = useState('Your First Name');
  const [Lname, setLname] = useState('Your Last Name');
  const [Age, setAge] = useState('Your Age');
  return (
    <View style={styles.container}>
      <TextInput
      style={styles.inputStyle}
      placeholder='First Name'
      onChangeText={(item)=>setName(item)}/>
      <TextInput
      style={styles.inputStyle}
      placeholder='Last Name'William
      onChangeText={(item)=>setLname(item)}/>
      <TextInput
      keyboardType='numeric'
      style={styles.inputStyle}
      placeholder='Age'
      onChangeText={(item)=>setAge(item)}/>
      <Text>First Name: {Fname} </Text>
      <Text>Last Name: {Lname} </Text>
      <Text>Age: {Age} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  inputStyle:{
    borderWidth: 1,
    borderColor: 'green',
    padding: 8,
    margin: 10,
    width: 200,
    alignItems: 'center'
  }
});