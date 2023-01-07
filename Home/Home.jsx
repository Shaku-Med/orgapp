import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, useWindowDimensions, View, RefreshControl, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Haptic from 'expo-haptics'
import { Video } from 'expo-av';
import { Linking } from "react-native";
import Autolink from 'react-native-autolink';
import { Connect } from '../Connect';
import { async } from '@firebase/util';
import CryptoJS from "react-native-crypto-js";
import uuid from 'react-native-uuid';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';

const wait = (timeout) => { 
  return new Promise(resolve => { 
    setTimeout(resolve, timeout)
  })
}

export default function Home({navigation}) {

  const {auth, setauth, owner, setowner, resetstate, setresetstate, allusr, setallusr} = useContext(Connect)


  const [refresh, setrefresh] = useState(false)

  const onRefresh = useCallback(() => { 
    setrefresh(true)
    wait(4000).then(() => setrefresh(false))
    setresetstate(uuid.v4())
    setauth(uuid.v4())
  })

  const demension = useWindowDimensions();

  const nvme = useNavigation()

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
   headerLeft: () => { 
    return ( 
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 9
      }}>
        <Image source={{uri: "https://orgainze.vercel.app/mainlogo.png"}} style={{width: 35, height: 35, marginLeft: 10, padding: 10}}/>
        <Text style={{
          fontSize: 30,
          color: 'white', 
          fontWeight: 'bold',
          marginLeft: 10
        }}>ORG</Text>
      </View>
    )
   },
   headerTitleStyle: { 
    display: 'none'
   },
   headerRight: () => { 
    return ( 
      <View style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 9,
        width: 80,
        marginRight: 20
      }}>
        <Ionicons onPress={e => { 
          navigation.navigate("Edit")
          Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Heavy)
        }} name='alert-circle' size={25} color={"white"}/>
       <Pressable onPress={e => { 
        navigation.navigate("Profile")
        Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Heavy)
       }}>
       { 
         owner.length < 1 ? "" :
         owner.map((val, key) => { 
          if(usedata.c_usr !== null && usedata.xs !== null){ 
          if(usedata.xs && usedata.c_usr){ 
            if(usedata.xs !== null && usedata.c_usr !== null){ 
              if(val.c_usr === usedata.c_usr && val.xs === usedata.xs){ 
                let profilepic = CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)
                let names = CryptoJS.AES.decrypt(val.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)
                if(profilepic !=="nothing"){ 
                  return ( 
                    <Pressable key={key} onPress={e => { 
                      navigation.navigate("Profile", { 
                        pageid: val.c_usr
                      })
                      Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Heavy)
                     }}>
                       <Image source={{uri: profilepic}} style={{
                      height: 35,
                      width: 35,
                      borderRadius: 50,
                    }}
                    resizeMode={"cover"}
                    />
                      </Pressable>
                  )
                }
                else { 
                  return ( 
                    <Pressable key={key} onPress={e => { 
                      navigation.navigate("Profile", { 
                        pageid: val.c_usr
                      })
                      Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Heavy)
                     }}
                      style={{
                      backgroundColor: '#057bf1',
                      padding: 10,
                      borderRadius: 50,
                      width: 30,
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <Text style={{
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: 'white'
                      }}>
                        { 
                          names.charAt(0)
                        }
                      </Text>
                    </Pressable>
                  )
                }
              }
            }
          }
          }
         })
       }

       </Pressable>
      </View>
    )
   }
  })

  let rands = Math.floor(Math.random() * allusr.length)


  const navs = useNavigation()

  useEffect(() => { 
   if(navs.isFocused() === true){ 
     async function homd(){ 
      await AsyncStorage.setItem("inis", "Home")
     }
     homd()
   }
  }, [])

  return (
    <Pressable style={{
      backgroundColor: "#393a3b",
      width: demension.width,
      height: '100%',
      overflow: 'scroll'
    }}>
         <ScrollView 
    contentContainerStyle={{
      backgroundColor: "#393a3b",
      width: demension.width,
    }}
    refreshControl={
      <RefreshControl refreshing={refresh} onRefresh={onRefresh}/>
    }>
      {/* Top Users */}
     { 
       allusr.length < 1 ? '' : 
       <ImageBackground
       blurRadius={10}
       style={{
        width: demension.width,
        height: 200,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'
       }}
       resizeMode="cover"
        source={{uri: CryptoJS.AES.decrypt( allusr[rands].coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'nothing' ? "https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg" : CryptoJS.AES.decrypt( allusr[rands].coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}}>
           <Pressable style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
           }}
           >
           <View style={{
            marginBottom: 10,
           }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}>
           Hot Seat.
          </Text>
        </View>
        <View>
         <Image
         style={{
          width: 100,
          height: 100,
          borderRadius: 100
         }}
         resizeMode="cover"
          source={{uri: CryptoJS.AES.decrypt( allusr[rands].profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'nothing' ? "https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg" : CryptoJS.AES.decrypt( allusr[rands].profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}}/>
        </View>
        <View style={{
          marginTop: 10
        }}>
          <Text
          style={{ 
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white'
          }}
          numberOfLines={1}
          >
           {CryptoJS.AES.decrypt( allusr[rands].names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}
          </Text>
        </View>
           </Pressable>
       </ImageBackground>
     }
     <View style={{
      width: demension.width,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
     }}>
        <View style={{
          width: demension.width,
          maxWidth: 350,
          borderRadius: 5,
          borderColor: '#393a3b',
          borderWidth: 1,
          shadowColor: '#000',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          backgroundColor: '#242526'
        }}>
         <View style={{
          borderBottomColor: '#393a3b',
          borderBottomWidth: 1,
          padding: 10
         }}>
         <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            borderBottomColor: '#393a3b',
            borderBottomWidth: 1
          }}>
            ShortCut
          </Text>
         </View>
          <View style={{
            padding: 15,
            borderBottomColor: '#393a3b',
            borderBottomWidth: 1
          }}>
            <Text selectable style={{
              color: 'white',
              fontSize: 15
            }}>
             Wanna chat with friends all around the world? Here's a shortcut to that. Click on the Link below to take your to the page so you can get started.
            </Text>
          </View>
          <View>
            <Button
            onPress={e => { 
              navigation.navigate("Chatting")
              Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Heavy)
             }}
             title='Try it' />
          </View>
        </View>
     </View>
     {/*  */}
     <View style={{
      width: demension.width,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
     }}>
      

      {/*  */}

      {/*  */}

      <View  style={{
          width: demension.width,
          maxWidth: 350,
          borderRadius: 5,
          borderColor: '#393a3b',
          borderWidth: 1,
          shadowColor: '#000',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          backgroundColor: '#242526',
          padding: 10
        }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center'
        }}>
          USERS
        </Text>
      </View>

      {/* User containser */}

      <View style={{
        width: "100%"
      }}>
       { 
         allusr.length < 1 ? '' :
         allusr.map((val, key) => { 
          if(usedata.c_usr !== val.c_usr){ 
            return ( 
              <Pressable key={key} style={{
                marginTop: 5,
                width: '100%',
              }}>
                <View style={{
                  justifyContent: "flex-start",
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '100%',
                  backgroundColor: '#242526',
                  borderWidth: 1,
                  borderColor: '#3a3b3c',
                  borderRadius: 5,
                  overflow: 'hidden'
                }}>
                  <Image 
                  style={{
                    width: 50,
                    height: 50
                  }}
                  source={{uri: CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'nothing' ? "https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg" : CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}}/>
                  <View style={{
                    marginLeft: 10
                  }}>
                    <View style={{
                      width: '100%',
                      maxWidth: 200
                    }}>
                      <Text numberOfLines={1} style={{
                        fontSize: 18,
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        {CryptoJS.AES.decrypt(val.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}
                      </Text>
                    </View>
                    <View  style={{
                      width: '100%',
                      maxWidth: 200
                    }}>
                      <Text numberOfLines={1} style={{
                        color: 'gray'
                      }}>
                        {CryptoJS.AES.decrypt(val.states, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'Admin' ? "Admin" : 'User'}
                      </Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            )
          }
         })
       }
      </View>

        {/* Admin only preview part... */}

        { 
          owner.length < 1 ? '' : 
          owner.map((vm, km) => { 
            if(usedata.c_usr === vm.c_usr){ 
              if(CryptoJS.AES.decrypt(vm.states, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === "Admin"){ 
                return ( 
                  <View style={{
                    width: "100%"
                  }} key={km}>
                     { 
                        allusr.length  < 1 ? "" :
                        allusr.map((v, k) => { 
                          if(usedata.c_usr !== v.c_usr){ 
                            return ( 
                              <View key={k} style={{
                                width: "100%",
                                marginTop: 10,
                              }}>
                                <View style={{
                                  backgroundColor: '#000',
                                  padding: 5,
                                  width: '100%',
                                  borderRadius: 5,
                                  borderWidth: 1,
                                  borderColor: 'gray'
                                }}>
                                 <View>
                                  <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: 'white'
                                  }}>
                                     {CryptoJS.AES.decrypt(v.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8).split(' ')[0] + `'s Data`}
                                    </Text>
                                 </View>
                                 {/*  */}
                                 <View>
                                  {/*  */}
                                 <View style={{
                                  padding: 5
                                 }}>
                                  <Text style={{
                                    color: 'white'
                                  }}>
                                    Name: <Text>{CryptoJS.AES.decrypt(v.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}</Text>
                                  </Text>
                                 </View>
                                 {/*  */}
                                  {/*  */}
                                 <View style={{
                                  padding: 5
                                 }}>
                                  <Text style={{
                                    color: 'white'
                                  }}>
                                    Profile: <Pressable onPress={async e => { 
                                      await WebBrowser.openBrowserAsync(CryptoJS.AES.decrypt(v.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === "nothing" ? "https://medzyadvanced.vercel.app" : CryptoJS.AES.decrypt(v.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8))
                                    }}>
                                      <Text style={{
                                        color: 'white'
                                      }}>
                                        {CryptoJS.AES.decrypt(v.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}
                                      </Text>
                                    </Pressable>
                                  </Text>
                                 </View>
                                 {/*  */}
                                  {/*  */}
                                 <View style={{
                                  padding: 5
                                 }}>
                                  <Text style={{
                                    color: 'white'
                                  }}>
                                    Coverpic: <Pressable onPress={async e => { 
                                      await WebBrowser.openBrowserAsync(CryptoJS.AES.decrypt(v.coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === "nothing" ? "https://medzyadvanced.vercel.app" : CryptoJS.AES.decrypt(v.coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8))
                                    }}>
                                      <Text style={{
                                        color: 'white'
                                      }}>
                                        {CryptoJS.AES.decrypt(v.coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}
                                      </Text>
                                    </Pressable>
                                  </Text>
                                 </View>
                                 {/*  */}
                                  {/*  */}
                                 <View style={{
                                  padding: 5
                                 }}>
                                  <Text style={{
                                    color: 'white'
                                  }}>
                                    For privacy reasons: <Text>I deny to display everything.</Text>
                                  </Text>
                                 </View>
                                 {/*  */}
                                 <View>
                                   <Button onPress={e => { 
                                    Alert.alert("WOA WOA WOA", "Admin, Do You Really Wish To Take This Action?", [{ 
                                      text: "Yes",
                                      onPress: () => { 
                                        axios.post("https://apsbackend.vercel.app/delete", { 
                                          xs: CryptoJS.AES.encrypt(usedata.xs, "La:?balumo#ham$ed01234:#?").toString(),
                                          c_usr: CryptoJS.AES.encrypt(usedata.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                          delid: CryptoJS.AES.encrypt(v.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                        }).then(res => { 
                                          if(res.data.success === "success"){ 
                                            setresetstate(uuid.v4())
                                            setauth(uuid.v4())
                                          }
                                          else { 
                                            alert("Unable to perform this request")
                                          }
                                        }).catch(er => { 
                                          alert("Request Denied. Please try again.")
                                        })
                                      }
                                    },
                                  { 
                                    text: "No"
                                  }])
                                   }} title='Delete Account'/>
                                  </View>
                                 </View>
                                </View>
                              </View>
                            )
                          }
                        })
                     }
                  </View>
                )
              }
            }
          })
        }
     </View>
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
