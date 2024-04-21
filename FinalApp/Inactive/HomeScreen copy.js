import { Button, StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>You're welcome</Text>
      <Button
          title='Details'
          onPress={ () => navigation.navigate ("Details", {
            name: "Chuck Howard",
            age: 55,
          })}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
