import React from 'react'
import { View, Text, useColorScheme, ImageBackground, Button } from 'react-native'

function Screen({onAuth}) {

    const colorScheme = useColorScheme()

  return (
   <ImageBackground source={{uri: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/100507878_2610072155933527_621068420078632960_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GMfAN3X6JOAAX_-IcB8&_nc_ht=scontent-lga3-2.xx&oh=00_AfCLyoK6LLpafCW3RVFN8Px-9DAI8X1UIfLtXXlzed3zHg&oe=63DC2893"}} 
   blurRadius={200} style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
   }}>
    <Text style={{
        color: 'white',
        padding: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }}>
       Use your device to Authenticate your login.
    </Text>
    <Button title='Authenticate' onPress={onAuth}/>
   </ImageBackground>
  )
}

export default Screen
