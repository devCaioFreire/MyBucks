import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from "../pages/Home/home";
import Balance from "../pages/Balance/balance";
import Profile from "../pages/Profile/profile";

const AppBottomTab = createBottomTabNavigator();

function AppRoutes() {
    return (
        <AppBottomTab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                backgroundColor: '#240061',
                borderTopWidth: 0
            },
            tabBarActiveTintColor: '#FFF'
        }}>

            <AppBottomTab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: (color, size) => {
                        return <Ionicons name="home" color={'#AAA'} size={30} />
                    }
                }} />

            <AppBottomTab.Screen name="Register" component={Balance}
                options={{
                    tabBarIcon: (color, size) => {
                        return <Ionicons name="wallet" color={'#AAA'} size={30} />
                    }
                }} />

            <AppBottomTab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: (color, size) => {
                        return <Ionicons name="person-circle" color={'#AAA'} size={30} />
                    }
                }} />

        </AppBottomTab.Navigator >
    );
}

export default AppRoutes;