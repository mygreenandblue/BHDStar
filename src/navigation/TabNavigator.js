import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ShowTimeScreen from '../screens/ShowTimeScreen';
import AccountInfoScreen from '../screens/AccountInfoScreen';
import StoreScreen from '../screens/StoreScreen';
import StartStack from './StartStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = (initialRouteName) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#00092c' },
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'green',
      }}>
      <Tab.Screen
        name="Start"
        component={StartStack}
        options={({ }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="ShowTimes"
        component={ShowTimeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-youtube" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Store"
        component={StoreScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: 'yellow' },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="film-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountInfoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if (routeName == 'GameDetails') {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;
