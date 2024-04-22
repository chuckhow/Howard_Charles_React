import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen = () => {
  const [Addr, setAddress] = useState('Enter Address:');
  const [Sqft, setsqft] = useState('Enter Square Footage:');
  const [Ins, setIns] = useState('Enter Insurance Company:');
  const load = async () => {
    try {
      let Addr = await AsyncStorage.getItem("Address");
      if (Addr !== null) 
        {setAddress(Addr)}
    } catch (err) {
        alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home Summary: </Text>
      <Text>Address: {Addr} </Text>
      <Text></Text>
      <TouchableOpacity style={styles.button} onPress={() => load()}>
      <Text style={{ color: "white" }}>Retrieve</Text>
      </TouchableOpacity>
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
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'green',
  }
});
