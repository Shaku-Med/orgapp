import { StatusBar } from 'expo-status-bar';
import { Button, Image, Linking, Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Device from "expo-device";
import * as WebBrowser from 'expo-web-browser';

function Verify({navigation}) {

 navigation.setOptions({ 
    headerTitle: "Welcome",
    headerTitleStyle: { 
        color: 'white'
    },
    headerStyle: { 
        backgroundColor: "#242526"
    },
    headerleftStyle: { 
        color: 'white'
    }
 })

  return (
    <View style={{
        backgroundColor: "#3a3b3c",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 10
    }}>
      <Text>
        Verify
      </Text>
    </View>
  )
}

export default Verify
