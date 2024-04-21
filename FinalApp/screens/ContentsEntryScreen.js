import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const ContentsEntryScreen = () => {
  const [Desc, setDesc] = useState(' ');
  const [Type, setType] = useState(' ');
  const [Cost, setCost] = useState(' ');
  const [Date, setDate] = useState(' ');
  const [Location, setLoc] = useState(' ');
  const [Other, setOTH] = useState(' ');
  return (
    <View style={styles.container}>
      <Text>Enter Item Description: </Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Description'
      onChangeText={(item)=>setDesc(item)}/>
      <Text> </Text>
      <Text>Enter Item Category: (ie. Furniture, fixtures, clothes, etc.) </Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Type'
      onChangeText={(item)=>setType(item)}/>
      <Text> </Text>
      <Text>Enter Purchase Price</Text>
      <TextInput
      style={styles.inputStyle}
      keyboardType='numeric'
      placeholder='Purchase Price'
      onChangeText={(item)=>setCost(item)}/>
      <Text> </Text>
      <Text>Enter Purchase Year</Text>
      <TextInput
      style={styles.inputStyle}
      keyboardType='numeric'
      placeholder='Purchase Year'
      onChangeText={(item)=>setDate(item)}/>
      <Text> </Text>
      <Text>Enter Room Located</Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Room Location'
      onChangeText={(item)=>setLoc(item)}/>
      <Text> </Text>
      <Text>Enter Other Information</Text>
      <TextInput
      style={styles.inputStyle}
      placeholder='Other Info'
      onChangeText={(item)=>setOTH(item)}/>
      <Text> </Text>
      <Text>Home Summary: </Text>
      <Text>Description: {Desc} </Text>
      <Text>Item Category: {Type} </Text>
      <Text>Purchase Price: {Cost} </Text>
      <Text>Purchase Date: {Date} </Text>
      <Text>Room Located: {Location} </Text>
      <Text>Other Info: {Other} </Text>
    </View>
    
  );
}
export default ContentsEntryScreen

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
