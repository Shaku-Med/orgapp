import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Sign';

const Stack = createStackNavigator();

export default function Auth({navigation}) {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{navigation}}/>
            <Stack.Screen name='Signup' component={Signup} options={{navigation}}/>
        </Stack.Navigator>
    </NavigationContainer>
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
