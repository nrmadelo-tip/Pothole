// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/
import "react-native-gesture-handler";
 
// Import React and Component
import React from "react";
 
// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
 
// Import Screens
import SplashScreen from "./pages/SplashScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";

// Import ScreensTabButtomNavigation

import DestinationDetail from "./pages/DestinationDetail";


import AccountScreen from "./pages/AccountScreen";
import InfoScreen from "./pages/InfoScreen";
import LogScreen from "./pages/LogScreen";
import HomeDay from "./pages/HomeDay";
import ConnectScreen from "./pages/ConnectScreen";
import { GlobalProvider } from "./datafolder/GlobalState";

// push notification testing
//import PushNotification from "react-native-push-notification";



// extra screns
import Tabs from "./navigation/tabs";




const Stack = createStackNavigator();
 
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: "#DE7E02", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};






 
/* Main Navigator */
const App = () => {
  return (
    <GlobalProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 2 Seconds */}



        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator which include Login Signup */}



        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "HomeScreen", //Set Header Title
            headerStyle: {
              backgroundColor: "#DE7E02", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />


        
        <Stack.Screen
          name="ConnectScreen"
          component={ConnectScreen}
        />
        




        <Stack.Screen
          name="HomeDay"
          component={Tabs}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
        />

        <Stack.Screen
          name="InfoScreen"
          component={InfoScreen}
        />

        
        <Stack.Screen
          name="LogScreen"
          component={LogScreen}
        />






      </Stack.Navigator>
    </NavigationContainer>
    </GlobalProvider>
  );
};
 
export default App;