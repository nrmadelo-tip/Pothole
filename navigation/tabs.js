import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";

import { icons, COLORS } from "../constants";
import Account from "../pages/AccountScreen";
import Info from "../pages/InfoScreen";
import Log from "../pages/LogScreen"

const Tab = createBottomTabNavigator();

const homeName = "Home";
const logsName = "Log";
const info1Name = "Info";
const profileName = "Profile";



const tabOptions = {
    showLabel: true,
    style: {
        height: 70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21, 
    },
};
    
const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {  
                    const tintColor = focused ? COLORS.primary : COLORS.gray;
                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );

                         case "Log":
                            return (
                                 <Image   
                                    source={require("../Image/log_icon.png")}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 28
                                    }}
                                  />
    
                                );

                        case "Info":
                            return (
                                <Image
                                    source={require("../Image/Info.png")}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />

                            );
                        case "Profile":
                            return (
                                <Image
                                    source={icons.user}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name= {homeName}
                component={Home}
            />

            <Tab.Screen
                name= {logsName}
                component={Log}
            />

            <Tab.Screen
                name={info1Name}
                component={Info}
            />

            <Tab.Screen
                name= {profileName}
                component={Account}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
