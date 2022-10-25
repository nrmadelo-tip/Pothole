
// Import React and Component
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
 
import auth from "@react-native-firebase/auth";



 
const SplashScreen = ({ navigation }) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
 
  useEffect(() => {

    setTimeout(() => {
      setAnimating(false);
      // Check if currentUser is set or not
      // If not then send for Authentication
      // else send to Home Screen
      navigation.replace(
        auth().currentUser ? "HomeScreen" : "Auth"
      );
    }, 5000);
  }, []);



 
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FEFEFE" }}
    >
      <View style={styles.container}>
        <Image
          source={require("../Image/wenk.png")}
          style={{
            width: "300%",
            resizeMode: "contain",
            margin: 30,
          }}
        />
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          color: "black",
        }}
      >
      </Text>

    </SafeAreaView>
  );
};
 
export default SplashScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
});