import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


import { COLORS, SIZES, FONTS, icons, images } from "../constants"





const Home = ({ navigation }) => {




  function rendersStartLearning(){
    return (
      <ImageBackground>
        source={require("../Image/pothole_banner.jpg")}
        style={{
          alignItems: 'flex-start',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding:15


        }}


      </ImageBackground>
    )
  }


  // Render



  return (

    <SafeAreaView style={{ flex: 1 }}>
    <Text style={{ ...FONTS.h2,textAlign: 'center' }}>Hello, Welcome to EyePothole App!
    </Text>

    <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>Constantly There for you safety!! Press "CONNECT" to connect to the device
    </Text>

    <View style={{ alignItems: "center" }}>
        <Image
          source={require("../Image/pothole_banner.jpg")}
          style={{
            width: "85%",
            height: 200,
            resizeMode: "stretch",
            margin: 5,
          }}
        />
    </View>

      


    <View style={{ flex: 1, padding: 16 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}>


    <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#FE9001', '#010101']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>CONNECT</Text>
                    </LinearGradient>
                </TouchableOpacity>

      </View>

    </View>
  </SafeAreaView>
);
};

export default Home;

const styles = StyleSheet.create({
buttonStyle: {
  minWidth: 300,
  backgroundColor: "#FE9001",
  borderWidth: 0,
  color: "#FFFFFF",
  borderColor: "#7DE24E",
  height: 40,
  alignItems: "center",
  borderRadius: 50,
  marginLeft: 35,
  marginRight: 35,
  marginTop: 20,
  marginBottom: 25,
},
buttonTextStyle: {
  color: "#FE9001",
  paddingVertical: 10,
  fontSize: 15,
},
});