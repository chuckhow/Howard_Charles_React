import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Here are the Details</Text>
    </View>
  );
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
