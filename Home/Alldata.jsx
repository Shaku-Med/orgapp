import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import CryptoJS from "react-native-crypto-js";
import uuid from 'react-native-uuid';
import { Connect } from '../Connect';



function Alldata({socket}) {

    const {auth, setauth, owner, setowner, resetstate, setresetstate, allusr, setallusr} = useContext(Connect)

    useEffect(() => { 
       async function stors(){ 

        let xs = await AsyncStorage.getItem("xs")
        let c_usr = await AsyncStorage.getItem("c_usr")

        if(xs && c_usr){ 
            if(xs !== null && c_usr !== null){ 
                axios.post("https://apsbackend.vercel.app/owner", { 
                    c_usr: CryptoJS.AES.encrypt(c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                    xs: CryptoJS.AES.encrypt(xs, "La:?balumo#ham$ed01234:#?").toString(),
                }).then(async res => { 
                    if(res.data.success !== 'logout'){ 
                        setowner(res.data)
                        
                    }
                    else { 
                        await AsyncStorage.clear()
                        setauth(uuid.v4())
                    }
                }).catch(er => { 
                    console.log("owner error")
                })


                axios.post("https://apsbackend.vercel.app/qls", { 
                    c_usr: CryptoJS.AES.encrypt(c_usr, "La:?balumo#ham$ed01234:#?").toString(),
                    xs: CryptoJS.AES.encrypt(xs, "La:?balumo#ham$ed01234:#?").toString(),
                }).then(async res => { 
                    if(res.data.success !== 'logout'){ 
                        setallusr(res.data)
                    }
                    else { 
                        await AsyncStorage.clear()
                        setauth(uuid.v4())
                    }
                }).catch(er => { 
                    console.log("Graph erro")
                })


            }
        }
    
       
       }

       stors()
    }, [resetstate])

    useEffect(() => { 
        socket.on("load_r", data => { 
            async function myfss(){ 
                let c_usr = await AsyncStorage.getItem('c_usr')
                if(c_usr){ 
                    if(c_usr !== null){ 
                        if(c_usr !== data){ 
                            setresetstate(uuid.v4())
                            setauth(uuid.v4())
                        }
                    }
                }
            }

            myfss()
        })
    }, [])
    
  return (
    <View style={{
        display: 'none'
    }}>
        <Text></Text>
    </View>
  )
}

export default Alldata