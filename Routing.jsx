import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react'
import Chatting from './Home/Chatting';
import Home from './Home/Home';
import Profile from './Home/Profile';
import * as LocalAuthentication from 'expo-local-authentication'
import Screen from './Home/Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Edit from './Home/Edit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppState } from 'react-native';
import Chat from './Home/Chat';
function Routing({navigation, socket}) {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const [isbiomet, setbiomet] = useState(false)
  const [authdone, setAuthdone] = useState(false)

  function onAuth(){ 
    const auth = LocalAuthentication.authenticateAsync({ 
      promptMessage: "Login with your device password",
      fallbackLabel: "Enter your password"
    })
    auth.then(res => { 
      setAuthdone(res.success)
    })
  }

  useEffect(() => { 
    (async () => { 
      const comptable = await LocalAuthentication.hasHardwareAsync()
      setbiomet(comptable)
    })
    onAuth()
  }, [])


  const [inirou, setinirou] = useState('')

  useEffect(() => { 
   async function daasss(){ 
    let vals = await AsyncStorage.getItem("inis")
      if(vals !== null){ 
        setinirou(vals)
      }
      else { 
        console.log("no")
      }
   }
   daasss()
  }, [])



  function Root({navigation, socket}){ 
    return ( 
      <Tab.Navigator initialRouteName={inirou !== '' ? inirou : "Home"}>
      <Tab.Screen socket={socket} name='Home' component={Home} options={{
        navigation,
      tabBarIcon: (tabinfo) => { 
       if(tabinfo.focused === true){ 
        return ( 
          <Ionicons name='home' size={25} color={"#fff"}/>
        )
       }
       else { 
        return ( 
          <Ionicons name='home-outline' size={25} color={"#3a3b3c"}/>
        )
       }
      },
      tabBarActiveTintColor: "#fff",
      tabBarStyle: { 
        backgroundColor: "#242526"
      },
      headerStyle: { 
        backgroundColor: "#242526"
      },
      tabBarInactiveTintColor: "#3a3b3c",
      tabBarLabel: "Home"
      }}/>
      <Tab.Screen
       socket={socket}
       options={{
        navigation,
        tabBarIcon: (tabinfo) => { 
          if(tabinfo.focused === true){ 
            return ( 
              <Ionicons name='chatbubble' size={25} color={"#fff"}/>
            )
          }
          else { 
            return ( 
              <Ionicons name='chatbubble-outline' size={25} color={"#3a3b3c"}/>
            )
          }
        },
        tabBarActiveTintColor: "#fff",
        tabBarStyle: { 
          backgroundColor: "#242526"
        },
        headerStyle: { 
          backgroundColor: "#242526"
        },
        tabBarInactiveTintColor: "#3a3b3c",
        tabBarLabel: "Chat",
        tabBarBadge: null
        }}
       name='Chatting' component={Chatting}/>
      <Tab.Screen
      socket={socket}
      options={{
        navigation,
        tabBarIcon: (tabinfo) => { 
         if(tabinfo.focused === true){ 
          return ( 
            <Ionicons name='cog' size={25} color={"#fff"}/>
          )
         }
         else { 
          return ( 
            <Ionicons name='cog-outline' size={25} color={"#3a3b3c"}/>
          )
         }
        },
        tabBarActiveTintColor: "#fff",
        tabBarStyle: { 
          backgroundColor: "#242526"
        },
        headerStyle: { 
          backgroundColor: "#242526"
        },
        tabBarInactiveTintColor: "#3a3b3c",
        tabBarLabel: "Profile",
        }}
       name='Profile' component={Profile}/>
    </Tab.Navigator>
    )
  }


  // detect leave...

  const appState = useRef(AppState.currentState)



  useEffect(() => { 
    const subscription = AppState.addEventListener("change", nextStaate => { 
      if(appState.current.match(/inactive|background/) && nextStaate === 'active'){ 
       if(nextStaate === "inactive"){ 
         setAuthdone(false)
        }
        else if(nextStaate === "background"){ 
          setAuthdone(false)
        }
      } 
      else { 
        if(nextStaate === "inactive"){ 
          setAuthdone(false)
        }
        else if(nextStaate === "background"){ 
          setAuthdone(false)
        }
      }
    })

    return () => { 
      subscription.remove()
    }
  }, [])

  return (
   <>
    { 
      [authdone].map((val, key) => { 
        if(val === true){ 
          return ( 
          <NavigationContainer key={key}>
            <Stack.Navigator initialRouteName='Root'>
              <Stack.Group screenOptions={{presentation: 'modal', navigation, headerLeftLabelVisible: false}}>
                <Stack.Screen socket={socket} name='Edit' component={Edit}/>
              </Stack.Group>
              <Stack.Screen socket={socket} name='Root' component={Root} options={{headerShown: false}}/>
              <Stack.Screen socket={socket} name='Chat' component={Chat} options={{navigation, headerLeftLabelVisible: false}}/>
            </Stack.Navigator>
          </NavigationContainer>
          )
        }
        else { 
          return ( 
            <Screen key={key} onAuth={onAuth}/>
          )
        }
      })
    }
   </>
  )
}



export default Routing
