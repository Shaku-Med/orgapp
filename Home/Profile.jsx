import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useContext, useEffect, useState } from 'react';
import { Alert, Animated, Button, Image, ImageBackground, Modal, Pressable, StyleSheet, Text, View, UIManager, LayoutAnimation, Platform } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import ImageView from "react-native-image-viewing";
import * as ImagePicker from 'expo-image-picker';
import { storage } from './Firebase';
import {ref, uploadBytes, listAll, getDownloadURL, uploadString, deleteObject} from 'firebase/storage'
import axios from "axios";
import CryptoJS from "react-native-crypto-js";
import uuid from 'react-native-uuid';
import { Connect } from '../Connect';
import { DeviceMotion } from 'expo-sensors';

import io from 'socket.io-client'

const socket = new io("https://orgappbackend.mohamedbrima.repl.co", { 
  reconnectionAttempts: 6
})


export default function Profile({navigation, route}) {

  const {auth, setauth, owner, setowner, resetstate, setresetstate, allusr, setallusr} = useContext(Connect)

  const [position, setposition] = useState(new Animated.ValueXY({x: 0, y: 0}))

  // usersess

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
      headerShown: false
    })
  
    const navs = useNavigation()
  
  

  
    const [visible, setIsVisible] = useState(false);
  
  
    const [profile, setprofile] = useState(null);
    const [cover, setcover] = useState(null);
  
  
    const pick_profilepic = async e => { 
      let result = await ImagePicker.launchImageLibraryAsync({ 
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
  
      if(!result.canceled){ 
        setprofile(result.assets[0].uri)
  
        const response = await fetch(result.assets[0].uri)
        let blob = await response.blob()
  
        let uids = uuid.v4()
        let refstore = ref(storage, `Picture/${uids}`)
        await AsyncStorage.setItem("profile", uids)
        uploadBytes(refstore, blob).then(res => { 
          listAll(ref(storage, `Picture/`)).then(p => { 
            p.items.forEach(pi => { 
              getDownloadURL(pi).then(async vf => { 
                let savv = await AsyncStorage.getItem("profile")
                let xs = await AsyncStorage.getItem("xs")
                let c_usr = await AsyncStorage.getItem("c_usr")
                if(savv && xs && c_usr){ 
                  if(savv !== null && xs !== null && c_usr !== null){ 
                    if(vf.includes(savv)){ 
                      axios.post("https://apsbackend.vercel.app/profile/pic", { 
                        xs: CryptoJS.AES.encrypt(xs, "La:?balumo#ham$ed01234:#?").toString(),
                        c_usr: CryptoJS.AES.encrypt(c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                        profilepic: CryptoJS.AES.encrypt(vf, "La:?balumo#ham$ed01234:#?").toString(),
                      }).then(res => { 
                        Alert.alert("success", "Your profile picture has been updated", [{text: "Sounds great"}])
                        socket.emit("reload", c_usr)
                        setresetstate(uuid.v4())
                        setauth(uuid.v4())
                      }).catch(e => { 
                        alert("Sorry, We're unable to update your profile picture")
                      })
                    }
                  }
                }
              })
            })
          })
        })
       
      }
    }
    const pic_cover = async e => { 
      let result = await ImagePicker.launchImageLibraryAsync({ 
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      })
  
      if(!result.canceled){ 
        setcover(result.assets[0].uri)
  
        const response = await fetch(result.assets[0].uri)
        let blob = await response.blob()
  
        let uids = uuid.v4()
        let refstore = ref(storage, `Coverpic/${uids}`)
        await AsyncStorage.setItem("profile", uids)
        uploadBytes(refstore, blob).then(res => { 
          listAll(ref(storage, `Coverpic/`)).then(p => { 
            p.items.forEach(pi => { 
              getDownloadURL(pi).then(async vf => { 
                let savv = await AsyncStorage.getItem("profile")
                let xs = await AsyncStorage.getItem("xs")
                let c_usr = await AsyncStorage.getItem("c_usr")
                if(savv && xs && c_usr){ 
                  if(savv !== null && xs !== null && c_usr !== null){ 
                    if(vf.includes(savv)){ 
                      axios.post("https://apsbackend.vercel.app/cover/pic", { 
                        xs: CryptoJS.AES.encrypt(xs, "La:?balumo#ham$ed01234:#?").toString(),
                        c_usr: CryptoJS.AES.encrypt(c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                        profilepic: CryptoJS.AES.encrypt(vf, "La:?balumo#ham$ed01234:#?").toString(),
                      }).then(res => { 
                        Alert.alert("success", "Your cover photo has been updated", [{text: "Sounds great"}])
                        socket.emit("reload", c_usr)
                        setresetstate(uuid.v4())
                        setauth(uuid.v4())
                      }).catch(e => { 
                        alert("Sorry, We're unable to update your cover photo")
                      })
                    }
                  }
                }
              })
            })
          })
        })
  
  
      }
    }
  
    return (
      <>
        { 
          allusr.length < 1 ? "" : 
          allusr.map((val, key) => { 
            if(usedata.c_usr){ 
              if(usedata.c_usr !== null && usedata.c_usr === val.c_usr){ 
                return ( 
                  <View style={styles.container}>
       <ImageBackground 
       style={{
        width: '100%',
        height: 450,
        justifyContent: 'center',
        alignItems: 'center'
       }}
       source={CryptoJS.AES.decrypt(val.coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'nothing' ? "" : {uri: cover !== null ? cover : CryptoJS.AES.decrypt(val.coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}}>
       
       <Pressable>
        { 
          CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'nothing' ?
          <View style={{
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#057bf1',
            borderRadius: 200
          }}>
            <Text style={{
              fontSize: 50,
              fontWeight: 'bold',
              color: 'white'
            }}>
              { 
                CryptoJS.AES.decrypt(val.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8).charAt(0)
              }
            </Text>
          </View>
          :
          <Image 
        style={{
          width: 150,
          height: 150,
          borderRadius: 300,
          borderWidth: 1,
          borderColor: 'gray'
        }}
         source={{uri: profile !== null ? profile : CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}} />
        }
       </Pressable>
        
       </ImageBackground>
  
       <View>
        {/*  */}
        <View style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'row',
          padding: 10,
          backgroundColor: '#242526'
        }}>
            <Button onPress={pick_profilepic} title='Profilepic'/>
            <Button onPress={pic_cover} title='Coverpic'/>
        </View>
       </View>
       {/*  */}
       <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1
       }}>
          <Text style={{
            color: 'white',
            fontSize: 25
          }}>
            {
              CryptoJS.AES.decrypt(val.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)
            }
          </Text>
       </View>
       <View>
        <View style={{
          padding: 20
        }}>
          <Button onPress={e => { 
            Alert.alert("Attention!!", "You just clicked on the logout button. Please choose the type of logout you would like to do?", [{ 
              text: "This device",
              onPress: async () => { 
                await AsyncStorage.clear()
                setauth(uuid.v4())
              }
            },
          
        { 
          text: "Cancel"
        }])
          }} title='Logout'/>
        </View>
       <View>
          <Text style={{
              textAlign: 'center',
              color: 'white',
              marginTop: 5
          }}>
              Follow me on Facebook.
          </Text>
          <Button title='Go and follow' onPress={async e => { 
              await WebBrowser.openBrowserAsync("https://www.facebook.com/medzy.amara.1")
          }}/>
         </View>
       </View>
      </View>
                )
              }
            }
          })
        }
      </>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: "100%"
  },
});
