import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeEntryScreen = () => {
  const saveAddr = async () => {
    try {
      await AsyncStorage.setItem("Address", Addr);
    } catch (err) {
        alert(err);
    }
  };

  const savesqft = async () => {
    try {
      await AsyncStorage.setItem("sqft", Sqft);
    } catch (err) {
        alert(err);
    }
  };

  const [Addr, setAddress] = useState(' ');
  const [Sqft, setsqft] = useState(' ');
  const [Ins, setIns] = useState(' ');
  const [Bath, setBath] = useState(' ');
  const [Bed, setBed] = useState(' ');
  const [Living, setLiving] = useState(' ');
    return (
    <View style={styles.container}>
      <Text> </Text>
      <Text>Enter Insurance Company:</Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Insurance Company'
      onChangeText={(item)=>setIns(item)}/>
      <Text> </Text>

      <Text>Enter Address: </Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Address'
      onChangeText={(item)=>setAddress(item)}/>
      <Text> </Text>

      <Text>Enter Square Footage: </Text>
      <TextInput
      style={styles.inputStyle}
      keyboardType='numeric'
      placeholder='Square Footage'
      onChangeText={savesqft}/>
      <Text> </Text>

      <Text>Enter Number of Bathrooms:</Text>
      <TextInput
      style={styles.inputStyle}
      keyboardType='numeric'
      placeholder='Bathrooms'
      onChangeText={(item)=>setBath(item)}/>
      <Text> </Text>

      <Text>Enter Number of Bedrooms:</Text>
      <TextInput
      style={styles.inputStyle}
      keyboardType='numeric'
      placeholder='Bedrooms'
      onChangeText={(item)=>setBed(item)}/>
      <Text> </Text>

      <Text>Enter Number of Living Areas:</Text>
      <TextInput
      style={styles.inputStyle}
      keyboardType='numeric'
      placeholder='Living Areas'
      onChangeText={(item)=>setLiving(item)}/>
      <Text> </Text>
     
      <TouchableOpacity style={styles.button} onPress={() => saveAddr()}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
  
      <Text>Insurance Company: {Ins} </Text>
      <Text>Address: {Addr} </Text>
      <Text>Square Footage: {Sqft} </Text>
      <Text>Bedrooms: {Bed} </Text>
      <Text>Bathrooms: {Bath} </Text>
      <Text>Living Areas: {Living} </Text>
      
    </View>
    
  );
}

export default HomeEntryScreen

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 5,
    },
    inputStyle:{
      borderWidth: 1,
      borderColor: 'green',
      padding: 8,
      margin: 10,
      width: 200,
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
