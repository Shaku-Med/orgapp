import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  Vibration,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as Haptics from "expo-haptics";
import * as Device from "expo-device";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import CryptoJS from "react-native-crypto-js";
import uuid from 'react-native-uuid';
import Ionicons from "react-native-vector-icons/Ionicons";
import { async } from "@firebase/util";


// modal


// 

function Signup({ navigation }) {
  const demension = useWindowDimensions();

  const fadeAnim = useRef(
    new Animated.Value(Platform.OS === "ios" ? 150 : 165)
  ).current;

  const schme = useColorScheme();

  navigation.setOptions({
    headerShown: false,
  });

  const [animatestate, setanistate] = useState(0);

  const fadeIn = (e) => {
    if (animatestate === 1) {
      Animated.timing(fadeAnim, {
        toValue: demension.height - 100,
        duration: 800,
        useNativeDriver: false,
      }).start();
      setanistate(0);
    } else {
      Animated.timing(fadeAnim, {
        toValue: Platform.OS === "ios" ? 150 : 165,
        duration: 800,
        useNativeDriver: false,
      }).start();

      setanistate(1);
    }
  };

  useEffect(() => {
    const getSes = async (e) => {
      try {
        let val = await AsyncStorage.getItem("track");
        if (val === null) {
          const datam = async (e) => {
            let daa = await Device.osVersion;
            if (daa >= 16) {
              Alert.alert(
                "Organisation",
                "Organisation would like to track your data",
                [
                  {
                    text: "Accept",
                    async onPress(e) {
                      await AsyncStorage.setItem("track", "accepted");
                      Alert.alert(
                        "Congrat!",
                        "By accepting this, you'll get complete access to everything on this website"
                      );
                    },
                  },
                  {
                    text: "Deny",
                    async onPress(e) {
                      await AsyncStorage.setItem("track", "denied");
                    },
                  },
                ]
              );
            }
          };
          datam();
        }
      } catch (s) {
        console.log("error");
      }
    };
    getSes();

    const pme = async e => { 
      let verify = await AsyncStorage.getItem('verify')
      if(verify !== null){ 
        prompt()
      }
    }

    pme()
  }, []);



//   Authentications...

 const [names, setnames] = useState('')
 const [email, setemail] = useState('')
 const [pass, setpass] = useState('')

 let Sec = 10
 let Sec1 = 110

 const pat = [
    1 * Sec,
    2 * Sec1,
    3 * Sec1
]


  async function prompt(){ 
   let mails = await AsyncStorage.getItem('mails')
   if(mails !== null){ 
    Alert.prompt("Verify Account", `Check your email '${email === '' ? mails : email}' for your verification code`, [
      { 
        text: "Verify",
        onPress: (text) => { 
          if(text.length === 6){ 
            axios.post("https://apsbackend.vercel.app/verify", { 
            email: CryptoJS.AES.encrypt(email === '' ? mails : email, "La:?balumo#ham$ed01234:#?").toString(),
            v_code: CryptoJS.AES.encrypt(text, "La:?balumo#ham$ed01234:#?").toString(),
            v_txt: CryptoJS.AES.encrypt('verified', "La:?balumo#ham$ed01234:#?").toString(),
            new_code: CryptoJS.AES.encrypt(uuid.v4().split('-')[0].toString().substring(0, 6), "La:?balumo#ham$ed01234:#?").toString(),
          }).then(async res => { 
            if(res.data.success !== 'success'){ 
              alert(res.data.success)
              prompt()
            }
            else { 
              await AsyncStorage.removeItem('mails')
              await AsyncStorage.removeItem('verify')
              navigation.navigate("Login")
            }
          }).catch(er => { 
            prompt()
          })
          }
          else {
            prompt()
          }
        }
      },
      { 
        text: "resend",
        onPress(e){ 
          axios.post("https://apsbackend.vercel.app/resend", { 
            email: CryptoJS.AES.encrypt(email === '' ? mails : email, "La:?balumo#ham$ed01234:#?").toString(),
            v_code: CryptoJS.AES.encrypt(uuid.v4().split('-')[0].toString().substring(0, 6), "La:?balumo#ham$ed01234:#?").toString(),
          }).then(rs => { 
            if(rs.data.success = "success"){ 
              alert("We've sent another code. check your email")
              prompt()
            }
            else { 
              alert("Unable to resend")
              prompt()
            }
          }).catch(er => { 
            prompt()
          })
        }
      }
    ])
   }
  }

  const [modalVisible, setModalVisible] = useState(false);
  const [ver, setver] = useState(false);
  const [donev, setdonev] = useState(false);


  const [ind, setind] = useState(false)

  const handle_submit = e => { 
    let emailreg = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
    if(names === ""){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "Enter your name")
    }
    else if(names.trim().length < 3){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "Invalid name Length")
    }
    else if(names.split(' ').length < 2){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "We require your Full Name")
    }
    else if(names.match(/\w+/g).length < 2){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "Please Enter your Full Name")
    }
    else if(email === ''){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "Enter your email to continue")
    }
    else if(email.trim().length < 4){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "Invalid email length")
    }
    else if(!email.match(emailreg)){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "This is not a valid email address. @gmail.com")
    }
    else if(pass === ''){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "Enter your pass to continue")
    }
    else if(pass.trim().length < 4){ 
        Vibration.vibrate(pat)
        Alert.alert("Error!", "Invalid pass length")
    }
    else { 
      setind(true)
        axios.post("https://apsbackend.vercel.app/signup", { 
            names: CryptoJS.AES.encrypt(names, "La:?balumo#ham$ed01234:#?").toString(),
            email: CryptoJS.AES.encrypt(email, "La:?balumo#ham$ed01234:#?").toString(),
            pass: CryptoJS.AES.encrypt(pass, "La:?balumo#ham$ed01234:#?").toString(),
            dob: CryptoJS.AES.encrypt(uuid.v4(), "La:?balumo#ham$ed01234:#?").toString(),
            edu: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            gend: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            bio: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            profilepic: CryptoJS.AES.encrypt('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', "La:?balumo#ham$ed01234:#?").toString(),
            coverpic: CryptoJS.AES.encrypt('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png', "La:?balumo#ham$ed01234:#?").toString(),
            xs: CryptoJS.AES.encrypt(uuid.v4(), "La:?balumo#ham$ed01234:#?").toString(),
            c_usr: CryptoJS.AES.encrypt(uuid.v4(), "La:?balumo#ham$ed01234:#?").toString(),
            v_code: CryptoJS.AES.encrypt(uuid.v4().split('-')[0].toString().substring(0, 6), "La:?balumo#ham$ed01234:#?").toString(),
            v_txt: CryptoJS.AES.encrypt("notverified", "La:?balumo#ham$ed01234:#?").toString(),
            state: CryptoJS.AES.encrypt("ord", "La:?balumo#ham$ed01234:#?").toString(),
        }).then(async res => { 
            if(res.data.success === "success"){ 
                await AsyncStorage.setItem("verify", "yes")
                await AsyncStorage.setItem("mails", email)
                setmailss(email)
                Platform.OS === "ios" ? prompt() : setModalVisible(true)
            }
            else { 
                Vibration.vibrate(pat)
                Alert.alert("Error!", res.data.success)
                setind(false)
            }
        })
    }

  }


  const [mailsmainme, setmailss] = useState('')

  const [sendcode, setsendcode] = useState('')

  useEffect(() => { 
    async function mydassss(){ 
      let vmess = await AsyncStorage.getItem("mails")
      if(vmess){ 
        if(vmess !== null){ 
          Platform.OS === "ios" ? prompt() : setModalVisible(true)
          setmailss(vmess)
        }
      }
    }
    mydassss()
  }, [])



  return (
    <ImageBackground
      blurRadius={animatestate === 1 ? 10 : 30}
      source={{
        uri: "https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/100507878_2610072155933527_621068420078632960_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GMfAN3X6JOAAX_-IcB8&_nc_ht=scontent-lga3-2.xx&oh=00_AfCLyoK6LLpafCW3RVFN8Px-9DAI8X1UIfLtXXlzed3zHg&oe=63DC2893",
      }}
      style={{
        position: "absolute",
        width: demension.width,
        height: demension.height,
        backgroundColor: "#141617",
        top: 0,
        left: 0,
      }}
      onPress={Keyboard.dismiss}
    >
      <StatusBar hidden />
      <KeyboardAvoidingView
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          style={{
            paddingHorizontal: 20,
            width: demension.width,
            height: demension.height,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: Platform.OS === "ios" ? 0 : -110,
          }}
          onPress={Keyboard.dismiss}
        >
          <View
            style={{
              width: demension.width,
              maxWidth: Platform.OS === "ios" ? 350 : 400,
              height: Platform.OS === "ios" ? 450 : 500,
              backgroundColor: "#141617",
              borderRadius: 10,
              overflow: "hidden",
              borderColor: "#393a3b",
              borderWidth: 1,
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                borderBottomColor: "#393a3b",
                borderBottomWidth: 1,
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                Signup
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  color: "gray",
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                Name
              </Text>
              <TextInput
                placeholderTextColor={"gray"}
                style={styles.inputs}
                keyboardAppearance="dark"
                placeholder="Enter Your Name"
                selectionColor={"white"}
                selectTextOnFocus
                returnKeyType={"next"}
                onChangeText={e => { 
                    setnames(e)
                }}
                value={names}
                onSubmitEditing={handle_submit}
                />
            </View>
            <View>
              <Text
                style={{
                  fontSize: 25,
                  color: "gray",
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                Email
              </Text>
              <TextInput
                placeholderTextColor={"gray"}
                style={styles.inputs}
                keyboardAppearance="dark"
                placeholder="Enter Your Email"
                keyboardType={"email-address"}
                returnKeyType={"next"}
                onChangeText={e => { 
                    setemail(e)
                }}
                value={email}
                onSubmitEditing={handle_submit}
                selectionColor={"white"}
              />
            </View>
            <View style={{ width: "100%", marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 25,
                  color: "gray",
                  marginBottom: 10,
                  marginTop: 10,
                }}
              >
                Password
              </Text>
              <TextInput
                placeholderTextColor={"gray"}
                style={styles.inputs}
                keyboardAppearance="dark"
                placeholder="Create your password"
                keyboardType={"visible-password"}
                secureTextEntry
                returnKeyType={"done"}
                onChangeText={e => { 
                    setpass(e)
                }}
                value={pass}
                onSubmitEditing={handle_submit}
                selectionColor={"white"}
              />
            </View>
            { 
              [ind].map((v, k) => { 
                if(v === false){ 
                  return ( 
                    <TouchableOpacity
                    key={k}
                    onPress={handle_submit}
                    activeOpacity={0.5}
                    style={{
                      backgroundColor: "#242526",
                      fontSize: 20,
                      color: "white",
                      borderColor: "#393a3b",
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 25,
                        color: "white",
                        marginBottom: 10,
                        marginTop: 10,
                        textAlign: "center",
                      }}
                    >
                      Sign up
                    </Text>
                  </TouchableOpacity>
                  )
                }
                else { 
                  return ( 
                    <TouchableOpacity
                    key={k}
                    activeOpacity={0.5}
                    style={{
                      backgroundColor: "#242526",
                      fontSize: 20,
                      color: "white",
                      borderColor: "#393a3b",
                      borderWidth: 1,
                      borderRadius: 5,
                    }}
                  >
                   <Text  style={{
                        fontSize: 25,
                        color: "white",
                        marginBottom: 10,
                        marginTop: 10,
                        textAlign: "center",
                      }}>Loading...</Text>
                  </TouchableOpacity>
                  )
                }
              })
            }
          </View>
        </Pressable>
        <Animated.View
          onMagicTap={(e) => {
            alert("tap;");
          }}
          style={{
            position: "absolute",
            height: fadeAnim,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            bottom: 0,
            left: 0,
            width: demension.width,
            backgroundColor: "#141617",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Pressable>
            <Pressable
              onTouchStart={fadeIn}
              selectable
              style={{
                fontSize: 30,
                padding: 20,
                color: "white",
                fontWeight: "bold",
                flexDirection: "column",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  padding: 10,
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Sign up
              </Text>
            </Pressable>
            <View style={{ marginTop: -30, marginBottom: 40 }}>
              <View
                style={{
                  fontSize: 20,
                  color: "white",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Pressable style={{ paddingTop: -3, marginLeft: 20 }}>
                  <Text style={{ fontSize: 20, color: "white", marginTop: 20 }}>
                    have an account?
                  </Text>
                </Pressable>
                <Pressable
                  onPress={(e) => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    navigation.navigate("Login");
                  }}
                  style={{ paddingTop: -3, marginLeft: 20 }}
                >
                  <Text
                    style={{ fontSize: 20, color: "#057bf1", marginTop: 20 }}
                  >
                    Login
                  </Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Animated.View>
      </KeyboardAvoidingView>
      {/* modal part */}

      <Modal
    animationType="fade"
    transparent={false}
    
    visible={modalVisible}
    >
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <Pressable onPress={Keyboard.dismiss} style={{
     justifyContent: 'center',
     alignItems: 'center',
     height: '100%',
     width: '100%',
     position: 'relative',
     backgroundColor: 'black'
    }}>
     <StatusBar hidden/>
     <View>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
      }}>
        Activate your Account.
      </Text>
      <Text style={{
        color: 'gray',
        textAlign: 'center'
      }}>
        We've sent a code to your email {mailsmainme !== '' ? mailsmainme : ''}. Copy the code and paste here to verify your account.
      </Text>
     </View>
     <View style={{
      width: '100%',
      marginTop: 10
     }}>
      <TextInput onChangeText={e => { 
        setsendcode(e)
      }}
      value={sendcode}
       keyboardAppearance="dark" placeholderTextColor={"gray"} placeholder="Enter your code" style={{
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        color: 'white',
        borderColor: 'gray'
      }}/>
     </View>
     <View style={{
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
     }}>
       { 
         donev === false ? 
         <Pressable style={{
          width: 100,
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 5,
          marginRight: 10
        }}>
          <Text style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
          }}
          onPress={e => { 
            if(sendcode.length === 6 && mailsmainme !== ''){ 
              setdonev(true)
              axios.post("https://apsbackend.vercel.app/verify", { 
              email: CryptoJS.AES.encrypt(email === '' ? mailsmainme : email, "La:?balumo#ham$ed01234:#?").toString(),
              v_code: CryptoJS.AES.encrypt(sendcode, "La:?balumo#ham$ed01234:#?").toString(),
              v_txt: CryptoJS.AES.encrypt('verified', "La:?balumo#ham$ed01234:#?").toString(),
              new_code: CryptoJS.AES.encrypt(uuid.v4().split('-')[0].toString().substring(0, 6), "La:?balumo#ham$ed01234:#?").toString(),
            }).then(async res => { 
              if(res.data.success !== 'success'){ 
                alert(res.data.success)
                setdonev(false)
              }
              else { 
                await AsyncStorage.removeItem('mails')
                await AsyncStorage.removeItem('verify')
                setdonev(false)
                navigation.navigate("Login")
              }
            }).catch(er => { 
             
            })
            }
            else { 
              alert("Invalid code...")
            }
          }}
          >
            Verify
          </Text>
        </Pressable>
        : 
        <Pressable style={{
          width: 150,
          padding: 10,
          backgroundColor: 'green',
          borderRadius: 5,
          marginRight: 10
        }}>
          <Text style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
          }}
          onPress={e => { 
            alert("We're processing your data... please wait...")
          }}
          >
            Processing...
          </Text>
        </Pressable>
       }
       { 
         ver === false ? 
         <Pressable  onPress={ async e => { 
          if(mailsmainme !== ''){ 
            setver(true)
            axios.post("https://apsbackend.vercel.app/resend", { 
              email: CryptoJS.AES.encrypt(email === '' ? mailsmainme : email, "La:?balumo#ham$ed01234:#?").toString(),
              v_code: CryptoJS.AES.encrypt(uuid.v4().split('-')[0].toString().substring(0, 6), "La:?balumo#ham$ed01234:#?").toString(),
            }).then(rs => { 
              if(rs.data.success = "success"){ 
                alert("We've sent another code. check your email")
                setver(false)
              }
              else { 
                alert("Unable to resend")
                setver(false)
              }
            }).catch(er => { 
            })
          }
          else { 
            await AsyncStorage.clear()
          }
        }} style={{
          width: 100,
          padding: 10,
          backgroundColor: 'skyblue',
          borderRadius: 5,
          marginRight: 10
        }}>
          <Text style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center'
          }}>
            Resend
          </Text>
        </Pressable>
        :
        <Pressable  onPress={ async e => { 
          alert("We're sending you another code. please wait..")
        }} style={{
          width: 150,
          padding: 10,
          backgroundColor: 'skyblue',
          borderRadius: 5,
          marginRight: 10
        }}>
          <Text style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center'
          }}>
            Sending...
          </Text>
        </Pressable>
       }
     </View>
    </Pressable>
    </KeyboardAvoidingView>
    </Modal>

      {/* NEd */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    padding: 10,
    width: "100%",
    backgroundColor: "#242526",
    fontSize: 20,
    color: "white",
    borderColor: "#393a3b",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Signup;
