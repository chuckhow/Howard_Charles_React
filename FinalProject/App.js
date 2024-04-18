import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
export default function App() {
return (
<View style={styles.container}>
<View style={styles.SubView1}>
<Text style={styles.textStyle}>Hello,</Text>
</View>
<View style={styles.SubView2}>
<Text style={styles.textStyle}>This is </Text>
</View>
<View style={styles.SubView3}>
<Text style={styles.textStyle}>my App</Text>
</View>
<View style={styles.ImgStyle}>
<Text style={styles.textStyle}>UC Concept Logo</Text>
<Image
source={{
uri:
'https://cdn.dribbble.com/userupload/11495457/file/original-fa8d5595610baac48dc4deffc713671b.png?resize=1200x900&vertical=center',
}}
style={{width: 200, height: 200, alignSelf: 'center'}}
/>
</View>
</View>
);
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'center',
  },
  SubView1: {
  padding:20,
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center',

},
SubView2: {
padding:20,
backgroundColor: 'yellow',
alignItems: 'center',
justifyContent: 'center',
},
SubView3: {
padding:20,
backgroundColor: 'green',
alignItems: 'center',
justifyContent: 'center',
},
textStyle: {
textAlign: 'center',
color:"#000",
fontWeight: 'bold',
padding:20,
},
ImgStyle:{
paddingTop: 20,
alignItems:'flex-start',
},
});
