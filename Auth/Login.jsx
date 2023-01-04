import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
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

function Login({ navigation }) {
  const demension = useWindowDimensions();

  const fadeAnim = useRef(new Animated.Value(Platform.OS === "ios" ? 150 : 165)).current;

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



//   


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



const handle_submit = e => { 
    let emailreg = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
    if(email === ''){ 
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
        axios.post("http://192.168.1.43:3001/signup", { 
            names: CryptoJS.AES.encrypt(names, "La:?balumo#ham$ed01234:#?").toString(),
            email: CryptoJS.AES.encrypt(email, "La:?balumo#ham$ed01234:#?").toString(),
            pass: CryptoJS.AES.encrypt(pass, "La:?balumo#ham$ed01234:#?").toString(),
            dob: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            edu: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            gend: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            bio: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            profilepic: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            coverpic: CryptoJS.AES.encrypt('nothing', "La:?balumo#ham$ed01234:#?").toString(),
            xs: CryptoJS.AES.encrypt(uuid.v4(), "La:?balumo#ham$ed01234:#?").toString(),
            c_usr: CryptoJS.AES.encrypt(uuid.v4(), "La:?balumo#ham$ed01234:#?").toString(),
        }).then(res => { 
            if(res.data.success === "success"){ 
                navigation.navigate("Login")
            }
            else { 
                Vibration.vibrate(pat)
                Alert.alert("Error!", res.data.success)
            }
        })
    }

  }


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
  }, []);

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
          }}
          onPress={Keyboard.dismiss}
        >
          <View
            style={{
              width: demension.width,
              maxWidth: Platform.OS === "ios" ? 350 : 450,
              height: 350,
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
                Login
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
            <TouchableOpacity
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
                Login
              </Text>
            </TouchableOpacity>
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
                Login
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
                    Don't have an account?
                  </Text>
                </Pressable>
                <Pressable
                  onPress={(e) => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    navigation.navigate("Signup");
                  }}
                  style={{ paddingTop: -3, marginLeft: 20 }}
                >
                  <Text
                    style={{ fontSize: 20, color: "#057bf1", marginTop: 20 }}
                  >
                    Signup
                  </Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Animated.View>
      </KeyboardAvoidingView>
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

export default Login;
