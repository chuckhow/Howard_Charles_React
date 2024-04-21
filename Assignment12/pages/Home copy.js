import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native'; 
import React, { useState } from 'react';

export const Home = () => {
//export default function Home() {
  const [Addr, setAddress] = useState('Enter Address:');
  const [Sqft, setsqft] = useState('Enter Square Footage:');
  const [Ins, setIns] = useState('Enter Insurance Company:');
  return (
    <View style={styles.container}>
      <Text> </Text>
      <Text>          Home Inventory</Text>
      <Text> </Text>
      <Text>Enter Address: </Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Address'
      onChangeText={(item)=>setAddress(item)}/>
      <Text> </Text>
      <Text>Enter Square Footage: </Text>
      <TextInput
      keyboardType='numeric'
      style={styles.inputStyle}
      placeholder='Square Footage'
      onChangeText={(item)=>setsqft(item)}/>
      <Text> </Text>
      <Text>Enter Insurance Company:</Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Insurance Company'
      onChangeText={(item)=>setIns(item)}/>
      <Text> </Text>
      <Text>Summary: </Text>
      <Text>Address: {Addr} </Text>
      <Text>Square Footage: {Sqft} </Text>
      <Text>Insurance Company: {Ins} </Text>
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