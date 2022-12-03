import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../datafolder/GlobalState';
import WebView from 'react-native-webview';


const ConnectScreen = () => {
  let deym
    function updateIP (text){
        setDas(text)
        console.log(das)
      }
      const {das,setDas} = useContext(GlobalContext)
      const {yes,setYes} = useContext(GlobalContext)
      const [text,onChangeText] = useState()
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      const getPots = async() =>{
        try{
          deym = das
          const response = await fetch(`http://${deym}:9191/GetPotholes`)
          const dat = await response.json();
          setYes(false)
        } catch(error){
          console.error(error);
        }finally {
          setLoading(false);
        }
      }
    
    
      useEffect(()=>{
        getPots()
        console.log(yes)
      },[das])
     
    return(
        <View style={{ flex: 1,  justifyContent: 'center' }}>
            { yes && <TextInput
            style={{height: 40,width: 300,backgroundColor: 'azure', fontSize: 20,margin:20}}  
            onChangeText={onChangeText}
            value={text}
            editable = {yes}
            />}
            {yes && 
            <Button
            onPress={()=>updateIP(text)}
            title="Update IP Address of RPI"
            color="#841584"
            
            />
            }
            {yes &&
            <Text
            style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Connect Screen
        </Text>}
            {!yes && 
            <SafeAreaView style={{ flex: 1 }}>
            <WebView 
              source={{ uri: `${das}:5000/` }} 
            />
          </SafeAreaView>}
          
            
        </View>
        
    );
};

export default ConnectScreen

const styles = StyleSheet.create({})