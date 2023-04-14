import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../datafolder/GlobalState';
import WebView from 'react-native-webview';
import PushNotification from "react-native-push-notification";
import io from 'socket.io-client';
PushNotification.createChannel(
  {
    channelId: "channel-id", // ID of the channel
    channelName: "My channel", // Name of the channel
    channelDescription: "My channel description", // Description of the channel
    playSound: true,
    vibrate: true, // Vibrate on notification
    importance: 4 // Notification importance (default)
  },
  () => {} // Callback function
);

const Notification = (Location,dateTime) => {
  PushNotification.localNotification({
    // /* Android Only Properties /
    channelId: "channel-id", // (required)
    title: 'Pothole Detected', // (optional)
    message: `Pothole Detected in ${Location} at ${dateTime}` ,  // (required)
  });
};
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
      const [message,setMessages] = useState([]);
      const getPots = async() =>{
        try{
          deym = das
          const response = await fetch(`http://${deym}:9191/ `)
          const dat = await response.json();
          setYes(false)
        } catch(error){
          console.error(error);
        }finally {
          const socket = io(`http://${deym}:5000`);
          socket.on('connect', () => {
            console.log('Connected to socket server');
            this.setState({ socket });
          });
          socket.on('disconnect', () => {
            console.log('Disconnected from socket server');
            this.setState({ socket: null });
          });
          socket.on('Notify', (messages) => {
            // console.log('Received message: ' + messages);
            // setMessages(messages);
            // this.setState({ messages: [...setMessages, messages] });
            Notification(messages[0],messages[1],messages[2],messages[3])
            console.log("UPDATE")
          });
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
            <WebView
              source={{ uri: `${das}:5000/location`}}
            />
            {/* <Image
            source = {{uri:"http://192.168.100.59/images/0.png"}}
            style={{ width: 200, height: 200 }}
            /> */}
          </SafeAreaView>}
          
            
        </View>
        
    );
};

export default ConnectScreen

const styles = StyleSheet.create({})

