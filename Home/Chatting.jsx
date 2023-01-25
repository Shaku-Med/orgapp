import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Image, Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, Vibration, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { GiftedChat } from 'react-native-gifted-chat'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Haptic from 'expo-haptics'

import CryptoJS from "react-native-crypto-js";
import uuid from 'react-native-uuid';
import { Connect } from '../Connect';

import io from 'socket.io-client'

const socket = new io("https://orgappbackend.mohamedbrima.repl.co", { 
  reconnectionAttempts: 2
})


export default function Chatting({navigation}) {

  const {auth, setauth, owner, setowner, resetstate, setresetstate, allusr, setallusr} = useContext(Connect)


  const [modalVisible, setModalVisible] = useState(false);

  const [usedata, setusedata] = useState({ 
    c_usr: null,
    xs: null
  })

  useEffect(() => { 
    async function ourfunc(){ 
      let xs = await AsyncStorage.getItem("xs")
      let c_usr = await AsyncStorage.getItem("c_usr")

      if(xs && c_usr){ 
        if(xs !== null && c_usr !== null){ 
          setusedata({ 
            c_usr: c_usr,
            xs: xs
          })
        }
      }
    }

    ourfunc()

  }, [])

  navigation.setOptions({ 
    headerTitle: "Chat",
    headerTitleStyle: { 
      color: "white",
      fontSize: 0,
      display: 'none',
      width: 0
    },
    headerLeft: () => { 
      return (
        <View style={{
          width: '100%',
          paddingHorizontal: 20
        }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'gray'
          }}>
            Chat
          </Text>
        </View>
      )
    }
  })

  const navs = useNavigation()

  const [socksta, setsocsta] = useState('')

  useEffect(() => { 
   if(navs.isFocused() === true){ 
     async function homd(){ 
      await AsyncStorage.setItem("inis", "Chatting")
     }
     homd()
   }



   socket.on("status", data => { 
    if(data !== usedata.c_usr){ 
      setsocsta(data)
    }
    })

    // socket.on("message", async data => { 
    //   let c_u = await AsyncStorage.getItem("c_usr")
    //   let dats = data.length
    //   let mes = CryptoJS.AES.decrypt(mes[dats].receiversid, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)

    //   if(c_u){ 
    //     if(c_u !== null){ 
    //       if(c_u === mes){ 
    //         Vibration.vibrate()
    //       }
    //     }
    //   }
    // })
  
  }, [])


  useState(() => { 
    async function myapod(){ 
        let xs = await AsyncStorage.getItem("xs")
        let c_usr = await AsyncStorage.getItem("c_usr")

        if(xs && c_usr){ 
            if(xs !== null && c_usr !== null){
                socket.emit("owner_status", c_usr)
             }
        }
    }

    myapod()
}, [])

  return (
    <Pressable onPress={Keyboard.dismiss} style={{
      overflow: 'scroll',
      height: '100%',
      width: '100%',
      backgroundColor: "black"
    }}>
     <ScrollView>
       { 
         allusr.length < 1 ? '' : 
         allusr.map((val, key) => { 
           if(usedata.c_usr){ 
            if(usedata.c_usr !== null && val.c_usr !== usedata.c_usr){ 
              return ( 
                <TouchableOpacity key={key} onPress={e => { 
                  navigation.navigate("Chat", { 
                    paramKey: val.c_usr
                  })
                 }} activeOpacity={.6} style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: "100%",
                  backgroundColor: '#FF1493',
                  padding: 5,
                  marginBottom: 1
                 }}>
                    <View style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                        <Image
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 100
                      }}
                      resizeMode={"cover"}
                      source={{uri:  CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'nothing' ? "https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg" : CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}}/>
                      <View style={{
                        marginLeft:5
                      }}>
                        <View style={{maxWidth: 200}}>
                          <Text numberOfLines={1} style={{
                            fontSize: 20,
                            color: 'white'
                          }}>
                            {CryptoJS.AES.decrypt(val.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}
                          </Text>
                        </View>
                        <View style={{maxWidth: 200}}>
                          <Text  numberOfLines={1} style={{
                            fontSize: 15,
                            color: 'white'
                          }}>
                           {socksta !== '' ? socksta === val.c_usr ? "Online" : "offline" : 'offline'}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <Ionicons name='chevron-forward' size={25} color={"white"}/>
                 </TouchableOpacity>
              )
            }
           }
         })
       }
     </ScrollView>
    </Pressable>
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
