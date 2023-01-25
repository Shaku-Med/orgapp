import React from 'react'
import { View, Text, useColorScheme, ImageBackground, Button } from 'react-native'

function Screen({onAuth}) {

    const colorScheme = useColorScheme()

  return (
   <ImageBackground source={{uri: "https://static.dezeen.com/uploads/2017/08/tinder-redesign-graphics_dezeen_sq-1.jpg"}} 
   blurRadius={50} style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
   }}>
    <Text style={{
        color: 'black',
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        maxWidth: 350,
    }}>
       Use your device to Authenticate your login.
    </Text>
    <Button color={"red"}  title='Authenticate' onPress={onAuth}/>
   </ImageBackground>
  )
}

export default Screen
