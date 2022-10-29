// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/
 
// Import React and Component
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
 
import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, FONTS, SIZES } from '../constants';


import auth from "@react-native-firebase/auth";







const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState();
 
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });
 
    return subscriber;
  }, []);
 
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ alignItems: "center" }}>
          <Image
            source={require("../Image/wenk.png")}
            style={{
              width: "750%",
              height: 350,
              resizeMode: "contain",
              margin: 5,
            }}
          />
        </View>

      <View style={{ flex: 1, padding: 1 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}>

          <Text style={{ color: COLORS.gray,  textAlign: 'center', ...FONTS.body3 }}>Easy Solution to Report Pothole for your conviencs trip , 
            transportation and travel.</Text>


                <TouchableOpacity
                    style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
                    onPress={() => navigation.navigate("HomeDay")}
                >
                    <LinearGradient
                        style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
                        colors={['#FE9001', '#010101']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>START!</Text>
                    </LinearGradient>
                </TouchableOpacity>

                
        </View>

      </View>
    </SafeAreaView>
  );
};
 
export default HomeScreen;
 
const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 300,
    backgroundColor: "#FE9001",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 40,
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FE9001",
    paddingVertical: 1,
    fontSize: 16,
  },
});