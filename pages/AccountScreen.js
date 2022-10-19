import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";

import auth from "@react-native-firebase/auth";
import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, FONTS, SIZES } from '../constants';

const Account = ({ navigation }) => {
  const [user, setUser] = useState();
 
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      console.log("user", JSON.stringify(user));
      setUser(user);
    });
 
    return subscriber;
  }, []);
 
  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure? You want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.replace("Auth"))
              .catch((error) => {
                console.log(error);
                if (error.code === "auth/no-current-user")
                  navigation.replace("Auth");
                else alert(error);
              });
          },
        },
      ],
      { cancelable: false }
    );
  };
 






  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={{ alignItems: "center" }}>
          <Image
            source={require("../Image/LOGOKOTO.png")}
            style={{
              width: "350%",
              height: 150,
              resizeMode: "contain",
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
          }}
        >

          
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            PROFILE
          </Text>


          {user ? (
            <Text>
              Welcome{" "}
              {user.displayName
                ? user.displayName
                : user.email}
            </Text>
          ) : null}




        <TouchableOpacity
          style={[styles.shadow, { marginTop: SIZES.padding * 2, width: '70%', height: 50, alignItems: 'center', justifyContent: 'center' }]}
          activeOpacity={0.5}
          onPress={logout}
          >
          <LinearGradient
              style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
              colors={['#FE9001', '#010101']}
              start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 0 }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Logout</Text>
          </LinearGradient>


          </TouchableOpacity>
        </View>





      </View>
    </SafeAreaView>
  );
};
 
export default Account;
 
const styles = StyleSheet.create({
  buttonStyle: {
    minWidth: 300,
    backgroundColor: "#7DE24E",
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
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
  },
});
