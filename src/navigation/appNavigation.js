import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import TabNavigator from './TabNavigator';
import AccountInfoScreen from '../screens/AccountInfoScreen';
import ShowTimeScreen from '../screens/ShowTimeScreen';
import StoreScreen from '../screens/StoreScreen';
import MediaScreen from '../screens/MediaScreen';

const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: 'green',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={TabNavigator}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="ShowTimes"
                component={ShowTimeScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="logo-youtube" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Store"
                component={StoreScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="film-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Media"
                component={MediaScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="megaphone-outline" size={22} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Profile"
                component={AccountInfoScreen}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="person-outline" size={22} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

export default AppNavigation;
