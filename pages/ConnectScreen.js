import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../datafolder/GlobalState';

const ConnectScreen = () => {
    function updateIP (text){
        setDas(text)
        console.log(das)
      }
      const {das,setDas} = useContext(GlobalContext)
      const {yes,setYes} = useContext(GlobalContext)
      const [text,onChangeText] = useState()
      const [isLoading, setLoading] = useState(true);
      const getPots = async() =>{
        setDas(text)
        try{
          
          const response = await fetch(`http://${das}:9191/GetPotholes`)
          setYes(false)
          setYes(false)
          setDas(das)
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
            
            />}

            <Text
                style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>Connect Screen
            </Text>


            
        </View>
        
    );
};

export default ConnectScreen

const styles = StyleSheet.create({})