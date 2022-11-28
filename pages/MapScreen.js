import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
  } from "react-native";
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';





const MapScreen = ()=>{
    return(
        <View style={{ flex: 1}}>
            
            
            <Text
                onPress={() => alert('This is the "Log" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold', color: 'black' }}>MapScreen</Text>


                
        </View>

        
    );
};



export default MapScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
  