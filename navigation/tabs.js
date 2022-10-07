import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens";

import { icons, COLORS } from "../constants";
import Account from "../pages/AccountScreen";
import Browse from "../pages/BrowseScreen";

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: 90,
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
            tabBarOptions={tabOptions}
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
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            );
                        case "Logs":
                            return (
                                <Image
                                    
                                    source={require("../Image/log_icon.png")}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30
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
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            );
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />


            <Tab.Screen
                name="Logs"
                component={Browse}
            />



            <Tab.Screen
                name="Profile"
                component={Account}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
