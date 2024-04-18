import { StyleSheet, Text, View} from 'react-native'; 
import { useState } from 'react';
import { FlatList } from 'react-native-web';

export default function App() {
  const [List, setList] = useState(
    [
      {fruit: 'Mango', key: '1'},
      {fruit: 'Orange', key: '2'},
      {fruit: 'Apple', key: '3'},
      {fruit: 'Avocado', key: '4'},
      {fruit: 'Banana', key: '5'},
      {fruit: 'Grape', key: '6'},
      {fruit: 'Peach', key: '7'},
      {fruit: 'Apricot', key: '8'},
    ]
  );
  return (
    <View style={styles.container}>
      {List.map(item=>(
      <View key={item.key}>
        <FlatList
          data={List}
          renderItem={({item})=>(
            <Text style={styles.listStyle}>{item.fruit}</Text>
      )}
        />
      </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
    paddingHorizontal: 20,
    },
  listStyle:{
    marginTop: 24,
    padding: 30,
    backgroundColor: '#fff',
    fontSize: 24,}
});
