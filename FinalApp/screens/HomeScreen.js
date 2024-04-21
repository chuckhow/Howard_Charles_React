import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const HomeScreen = () => {
  const [Addr, setAddress] = useState('Enter Address:');
  const [Sqft, setsqft] = useState('Enter Square Footage:');
  const [Ins, setIns] = useState('Enter Insurance Company:');
  return (
    <View style={styles.container}>
      <Text>Home Summary: </Text>
      <Text>Address: {Addr} </Text>
      <Text>Square Footage: {Sqft} </Text>
      <Text>Insurance Company: {Ins} </Text>
    </View>
    
  );
}
export default HomeScreen

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
