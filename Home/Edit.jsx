import { StatusBar } from 'expo-status-bar';
import { Button, Image, Linking, Platform, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Device from "expo-device";
import * as WebBrowser from 'expo-web-browser';

function Edit({navigation}) {

 navigation.setOptions({ 
    headerTitle: "Welcome",
    headerTitleStyle: { 
        color: 'white'
    },
    headerStyle: { 
        backgroundColor: "#242526"
    },
    headerleftStyle: { 
        color: 'white'
    }
 })

  return (
    <View style={{
        backgroundColor: "#3a3b3c",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        padding: 10
    }}>
       <View style={{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        maxWidth: 300,
        paddingBottom: 10
       }}>
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center'
        }}>
            Device Information
        </Text>
       </View>
       <View style={{
        width: "100%",
        maxWidth: 300
       }}>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                OS:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Platform.OS}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                Type:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.brand}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                 Name:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.deviceName}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                 Year:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.deviceYearClass}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                Version:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Platform.Version}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                Space:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.totalMemory}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                Model:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.modelName}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                SCA:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.supportedCpuArchitectures}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                Build id:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.osInternalBuildId}
            </Text>
        </View>
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center'
        }}>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                Model id:
            </Text>
            <Text style={{
                color: 'white',
                fontSize: 20
            }}>
                {Device.modelId}
            </Text>
        </View>
        {/*  */}
        <View style={{
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        maxWidth: 300,
        paddingBottom: 10
       }}>
        <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center'
        }}>
            End
        </Text>
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

export default Edit
