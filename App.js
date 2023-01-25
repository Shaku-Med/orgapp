import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, useColorScheme, useWindowDimensions, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Auth from './Auth/Auth';
import Routing from './Routing';
import { Connect } from './Connect';
import Alldata from './Home/Alldata';
import io from 'socket.io-client'


const socket = new io("https://orgappbackend.mohamedbrima.repl.co", { 
  reconnectionAttempts: 2
})

export default function App() {

  const [state, setstate] = useState({ 
    payload: true,
    login: false,
    home: false
  })

  const schme = useColorScheme()

  const demension = useWindowDimensions()

  const [auth, setauth] = useState(0)

  useEffect(() => { 
    const getData = async () => { 
      try { 
        const c_usr = await AsyncStorage.getItem("c_usr")
        const xs = await AsyncStorage.getItem("xs")
        if(c_usr && xs){ 
          if(c_usr !== null && xs !== null){ 
            setstate({ 
              payload: false,
              login: false,
              home: true
            })
          }
          else { 
            setstate({ 
              payload: false,
              login: true,
              home: true
            })
          }
        }
        else { 
          setstate({ 
            payload: false,
            login: true,
            home: true
          })
        }
      }
      catch (e) { 
        console.log("error")
      }
    }

    const math = Math.floor(Math.random() * 10000) - 10

    setTimeout(() => {
      getData()
    }, math);


  }, [auth])


  // Actual stuff

  const [owner, setowner] = useState([])
  const [allusr, setallusr] = useState([])

  const [resetstate, setresetstate] = useState(0)

  return (
    <>
    <StatusBar hidden/>
      { 
        [state].map((val, key) => { 
          if(val.payload === true){ 
            return ( 
              <ImageBackground  source={{uri: "https://tinder.com/static/tinder.png"}} key={key} style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: demension.width,
                height: demension.height,
                backgroundColor: schme === "dark" ? "black" : "#f0f2f5"
              }}>
                <StatusBar hidden/>
               
              </ImageBackground>
            )
          }
          else { 
            if(val.login === true){ 
              return ( 
               <Connect.Provider key={key} value={{auth, setauth}}>
                   <Auth/>
               </Connect.Provider>
              )
            }
            else { 
              return ( 
               <Connect.Provider  key={key} value={{auth, setauth, owner, setowner, resetstate, setresetstate, allusr, setallusr}}>
                   <Alldata socket={socket}/>
                   <Routing socket={socket}/>
               </Connect.Provider>
              )
            }
          }
        })
      }
    </>
  );
}