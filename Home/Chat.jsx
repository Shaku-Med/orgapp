import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  useWindowDimensions,
  Image,
  ImageBackground,
  Modal,
  Button,
  Vibration,
  Alert,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Connect } from "../Connect";
import CryptoJS from "react-native-crypto-js";
import uuid from 'react-native-uuid';

import io from 'socket.io-client'
import axios from "axios";

import Autolink from 'react-native-autolink';
import { BackHandler } from 'react-native';

import * as Clipboard from 'expo-clipboard';

const socket = new io("https://orgappbackend.mohamedbrima.repl.co", { 
  reconnectionAttempts: 6
})


function Chat({ navigation, route }) {

    const {auth, setauth, owner, setowner, resetstate, setresetstate, allusr, setallusr} = useContext(Connect)

    const [allmess, setallmessages] = useState('')


    const demension = useWindowDimensions();

    const inputRef = useRef(null);

  const [usedata, setusedata] = useState({
    c_usr: null,
    xs: null,
  });

  const [modalVisible, setModalVisible] = useState(false);


  const [sent_act, setsent_act] = useState('')

  useEffect(() => {
    async function ourfunc() {
      let xs = await AsyncStorage.getItem("xs");
      let c_usr = await AsyncStorage.getItem("c_usr");

      if (xs && c_usr) {
        if (xs !== null && c_usr !== null) {
          setusedata({
            c_usr: c_usr,
            xs: xs,
          });
        }
      }
    }

    ourfunc();
  }, []);

  navigation.setOptions({
    headerStyle: {
      backgroundColor: "#FF1493",
    },
    headerTitle: () => { 
       if(allusr.length < 1){ 
        return ( 
            <Text>Loading...</Text>
        )
       }
       else { 
         return ( 
            allusr.map((val, key) => { 
                if(val.c_usr === route.params.paramKey){ 
                   if(route.params.paramKey !== usedata.c_usr){ 
                      return ( 
                        <View key={key}>
                            <Text numberOfLines={1} style={{
                                maxWidth: 200,
                                color: 'white'
                            }}>
                                {CryptoJS.AES.decrypt(val.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}
                            </Text>
                        </View>
                      )
                   }
                   else { 
                     navigation.goBack()
                   }
                }
            })
         )
       }
    },
    headerTitleStyle: {
      color: "white",
    },
    headerRight: () => {
        if(allusr.length < 1){ 
            return ( 
                <Text>Loading...</Text>
            )
           }
           else { 
             return ( 
                allusr.map((val, key) => { 
                    if(val.c_usr === route.params.paramKey){ 
                       if(route.params.paramKey !== usedata.c_usr){ 
                          return ( 
                            <View key={key} style={{
                                padding: 10
                            }}>
                                <Image
                                 style={{
                                    width: 35,
                                    height: 35,
                                    borderRadius: 100
                                  }}
                                  resizeMode={"cover"}
                                 source={{uri:  CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) === 'nothing' ? "https://t3.ftcdn.net/jpg/01/91/95/30/360_F_191953033_gehQATeDoh5z6PyRDbeKyBZuS83CjMEF.jpg" : CryptoJS.AES.decrypt(val.profilepic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}}/>
                            </View>
                          )
                       }
                       else { 
                         navigation.goBack()
                       }
                    }
                })
             )
           }
    },
    headerLeftLabelStyle: { 
        color: 'white'
    }
  });

  const [foc, setfoc] = useState(-60);
  const [foc1, setf1] = useState(90);

  const [message, setmessage] = useState('')


   useEffect(() => { 
    async function mydaatas(){ 
        let c_usr = await AsyncStorage.getItem("c_usr")
        let xs = await AsyncStorage.getItem("xs")
        if(c_usr && xs){ 
            if(c_usr !== null && xs !== null){ 
                axios.post("https://apsbackend.vercel.app/get/messages", { 
                    c_usr: CryptoJS.AES.encrypt(c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                    xs: CryptoJS.AES.encrypt(xs, "La:?balumo#ham$ed01234:#?").toString(),
                }).then(res => { 
                    setallmessages(res.data)
                }).catch(er => { 
                    console.log("Error")
                })
            }
        }
    }

    mydaatas()

    BackHandler.addEventListener('hardwareBackPress', false)
  
   }, [])


   useEffect(() => { 
    socket.on("message", data => { 
        setallmessages(data)
    })
   }, [])


//    Auth scrolling...

const scrollViewRef = useRef(null);


const handleButtonPress = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
};


  return (
    <>
      { 

        allusr.length < 1 ? "" : 
        allusr.map((val, key) => { 
            if(val.c_usr === route.params.paramKey){ 
                if(route.params.paramKey !== usedata.c_usr){ 
                    return ( 
                        <Pressable
                        key={key}
                        style={{
                          width: "100%",
                          height:'100%',
                          backgroundColor: "#FF1493",
                          position: "relative",
                          bottom: 0,
                        }}
                        onPress={(e) => {
                          Keyboard.dismiss();
                        }}
                      >
                      {/*  */}
                        <KeyboardAvoidingView
                          style={{
                            position: "relative",
                            width: "100%",
                            flex: 1,
                          }}
                          behavior={Platform.OS === "ios" ? "padding" : "height"}
                        >

                         {/* Key board view */}

                         <ImageBackground resizeMode={"cover"} blurRadius={0} source={{uri: `${CryptoJS.AES.decrypt(val.coverpic, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)}`}} style={{
                              width: "100%",
                              height: '100%',
                              zIndex: -1,
                          }}
                          
                          imageStyle={"center"}>
                        <ScrollView ref={scrollViewRef} style={{
                          width: '100%',
                          zIndex: 200,
                          maxHeight: foc1 + "%",
                          overflow: 'scroll'
                        }}
                        scrollEnabled={true}
                        showsVerticalScrollIndicator={false}
                        >   
                            <View style={{
                              width: '100%',
                            }}>

                              {/* Chat MEssages */}
                               { 
                                 allmess.length < 1 ? "" : 
                                 allmess.map((m, n) => { 
                                   if(usedata.c_usr  && usedata.xs){ 
                                    if(usedata.c_usr !== null && usedata.xs !== null){ 
                                        let senderid = CryptoJS.AES.decrypt(m.sendersid, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)
                                        let receiversid = CryptoJS.AES.decrypt(m.receiversid, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)
                                        let sendemail = CryptoJS.AES.decrypt(m.sendemail, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)
                                        let recemail = CryptoJS.AES.decrypt(m.recemail, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)
                                        let domb = CryptoJS.AES.decrypt(val.dob, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)

                                        if(senderid === usedata.c_usr || receiversid === usedata.c_usr){ 
                                          if(sendemail === domb || recemail === domb){ 
                                            handleButtonPress()
                                           if(senderid === usedata.c_usr){ 
                                            return ( 
                                                <Pressable key={n} onLongPress={e => { 
                                                  setsent_act({ 
                                                    messtext: CryptoJS.AES.decrypt(m.message_sent, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8),
                                                    messid: m.message_id,
                                                  })
                                                  setModalVisible(true)
                                                }}>
                                                    <View style={{
                                                        padding: 10,
                                                        backgroundColor: '#FF69B4',
                                                        maxWidth: '80%',
                                                        borderRadius: 10,
                                                        marginLeft: 10,
                                                        marginTop: 5
                                                    }}>
                                                        <Text style={{
                                                            color: 'black',
                                                        }}>
                                                            Me
                                                        </Text>
                                                        <Autolink  text={CryptoJS.AES.decrypt(m.message_sent, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)} style={{
                                                            color: "white",
                                                            marginTop: 10,
                                                            
                                                        }}/>
                                                        </View>
                                                </Pressable>
                                            )
                                           }
                                           else { 
                                            return ( 
                                                <Pressable key={n}>
                                                <View style={{
                                                    padding: 10,
                                                    justifyContent: 'center',
                                                    alignItems: 'flex-end',
                                                    padding: 5
                                                }}>
                                                    <View style={{
                                                      backgroundColor: 'black',
                                                      width: '100%',
                                                      maxWidth: '80%',
                                                      padding: 10,
                                                      borderRadius: 10
                                                    }}>
                                                    <Text style={{
                                                        color: 'lightblue',
                                                        shadowColor: 'black',
                                                        shadowOffset: { width: 2, height: 2 },
                                                        shadowOpacity: 1,
                                                        shadowRadius: 2,
                                                    }}>
                                                       {senderid === val.c_usr ? CryptoJS.AES.decrypt(val.names, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8) : 'anonymous'}
                                                    </Text>
                                                    <Autolink  text={CryptoJS.AES.decrypt(m.message_sent, "La:?balumo#ham$ed01234:#?").toString(CryptoJS.enc.Utf8)} style={{
                                                            color: "white",
                                                            marginTop: 10,
                                                            shadowColor: 'black',
                                                            shadowOffset: { width: 2, height: 2 },
                                                            shadowOpacity: 1,
                                                            shadowRadius: 2,
                                                        }}/>
                                                    </View>
                                                </View>
                                            </Pressable>
                                            )
                                           }
                                          }
                                        }
                                    }
                                   }
                                 })
                               }
                              {/* Chat MEssages */}
                            </View>
                        </ScrollView>
                          </ImageBackground>

                         {/* End of chat cont */}

                          <View
                            style={{
                              position: "relative",
                              width: "100%",
                              marginTop: foc,
                              padding: 10,
                              backgroundColor: "#FF1493",
                              justifyContent: "space-between",
                              alignItems: "center",
                              height: 80,
                            }}
                          >
                            {/* Chat Input field */}
                            <View
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                                flexDirection: "row",
                                alignItems: "center",
                                paddingBottom: 10,
                              }}
                            >
                              <TextInput
                              autoFocus
                               onFocus={e => { 
                                  setfoc(Platform.OS == "ios" ? -150 : -160)
                                  setf1(Platform.OS === "ios" ? 70 : 63)
                               }}
                               onBlur={e => { 
                                  setfoc(-80)
                                  setf1(90)
                               }}
                                placeholder="Send A message"
                                style={{
                                  padding: 10,
                                  borderWidth: 1,
                                  borderColor: "white",
                                  color: "white",
                                  borderRadius: 5,
                                  width: "100%",
                                  maxWidth: "85%",
                                  maxHeight: 70,
                                }}
                                ref={inputRef}
                                placeholderTextColor={"white"}
                                selectTextOnFocus
                                selectionColor={"white"}
                                keyboardAppearance={"dark"}
                                numberOfLines={10}
                                onChangeText={e => { 
                                    setmessage(e)
                                }}
                                value={message}
                                onSubmitEditing={e => { 
                                  e.preventDefault()
                                    if(message !== ''){ 
                                        socket.emit("data", { 
                                            sendersid: CryptoJS.AES.encrypt(usedata.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                            sendmain: CryptoJS.AES.encrypt(usedata.xs, "La:?balumo#ham$ed01234:#?").toString(),
                                            receiversid: CryptoJS.AES.encrypt(val.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                            message_sent: CryptoJS.AES.encrypt(message, "La:?balumo#ham$ed01234:#?").toString(),
                                            message_id: CryptoJS.AES.encrypt(uuid.v4(), "La:?balumo#ham$ed01234:#?").toString(),
                                            message_type: CryptoJS.AES.encrypt('text', "La:?balumo#ham$ed01234:#?").toString(),
                                        })
                                        setmessage("")
                                        inputRef.current.clear();

                                        // Keep the focus on the TextInput field
                                        inputRef.current.focus()
                                       
                                    }
                                }}
                              />
                              <Ionicons
                               onPress={e => { 
                                if(message !== ''){ 
                                    socket.emit("data", { 
                                        sendersid: CryptoJS.AES.encrypt(usedata.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                        sendmain: CryptoJS.AES.encrypt(usedata.xs, "La:?balumo#ham$ed01234:#?").toString(),
                                        receiversid: CryptoJS.AES.encrypt(val.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                        message_sent: CryptoJS.AES.encrypt(message, "La:?balumo#ham$ed01234:#?").toString(),
                                        message_id: CryptoJS.AES.encrypt(uuid.v4(), "La:?balumo#ham$ed01234:#?").toString(),
                                        message_type: CryptoJS.AES.encrypt('text', "La:?balumo#ham$ed01234:#?").toString(),
                                    })
                                    setmessage("")
                                   
                                }
                               }}
                                style={{
                                  paddingRight: 10,
                                }}
                                name="send"
                                size={25}
                                color={"white"}
                              />
                            </View>
                            {/* Chat Input field. */}
                          </View>
                        </KeyboardAvoidingView>
                        {/* Modal part */}

                         <Modal
                         animationType="fade"
                         transparent={false}
                         
                         visible={modalVisible}
                         onRequestClose={e => { 
                          setModalVisible(false)
                         }}
                        
                         >
                         <View style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '100%',
                          width: '100%',
                          position: 'relative',
                          backgroundColor: 'black'
                         }}>
                          <StatusBar hidden/>
                          <Pressable onPress={e => { 
                            setModalVisible(false)
                          }} style={{
                            position: 'absolute',
                            top: Platform.OS === "ios" ? 60 : 10,
                            right: 20
                          }}>
                            <Ionicons name="close" size={30} color={'white'}/>
                          </Pressable>
                          <View style={{
                            maxWidth: '80%',
                            width: '100%',
                            height: '100%',
                            maxHeight: Platform.OS == "ios" ? 110 : 130,
                            borderWidth: 1,
                            borderColor: 'gray',
                            borderRadius: 10,
                          }}>
                            <View style={{
                              borderBottomColor: 'gray',
                              borderBottomWidth: 1,
                              padding: 10
                            }}>
                              <Text style={{
                                color: 'white',
                                fontSize: 20
                              }}>
                                Take Action
                              </Text>
                            </View>
                            <View>
                              <Text numberOfLines={3} style={{
                                color: 'white',
                                padding: 10
                              }}>
                                {sent_act.messtext}
                              </Text>
                            </View>
                            <View style={{
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '100%',
                              marginTop: 40,
                              padding: 5
                            }}>
                              <Pressable 
                               onPress={e => { 
                                Alert.alert("Warning!!!", "This message can't be backedup. Do you wish to delete from everyone?", [{ 
                                  text: "Yes",
                                  onPress: () => { 
                                    socket.emit("delete", { 
                                      sendersid: CryptoJS.AES.encrypt(usedata.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                      sendmain: CryptoJS.AES.encrypt(usedata.xs, "La:?balumo#ham$ed01234:#?").toString(),
                                      receiversid: CryptoJS.AES.encrypt(val.c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                                      message_id:sent_act.messid,
                                  })
                                  setModalVisible(false)
                                  }
                                }, 
                              { 
                                text: "No"
                              }])
                               }}
                               style={{
                                backgroundColor: 'red',
                                padding: 10,
                                borderRadius: 5,
                                width: 100,
                                marginRight: 10
                              }}>
                                <Text style={{
                                  color: 'white',
                                  textAlign: 'center'
                                }}>
                                  Delete
                                </Text>
                              </Pressable>

                              <Pressable onPress={ e => { 
                                const clips = Clipboard.setString(sent_act.messtext);
                                alert(`'${sent_act.messtext}' | ` + "has been copied")
                                Vibration.vibrate()
                              }} style={{
                                backgroundColor: 'skyblue',
                                padding: 10,
                                borderRadius: 5,
                                width: 100
                              }}>
                                <Text style={{
                                  color: 'white',
                                  textAlign: 'center'
                                }}>
                                  Copy
                                </Text>
                              </Pressable>
                            </View>
                          </View>
                         </View>
                         </Modal>

                        {/* MModal ending */}
                      </Pressable>
                    )
                }
            }
        })
      
      }
    </>
  );
}

const styles = StyleSheet.create({
  dangerButton: {
    backgroundColor: 'red',
    color: 'white',
  },
});

export default Chat;
