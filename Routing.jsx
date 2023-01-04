import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Routing() {
  return (
    <View style={styles.container}>
      <Text>AUTHENTICATION PAGES.</Text>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
