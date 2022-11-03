import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import OnboardingScreen from '../screens/Onboarding';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import FilmDetailScreen from '../screens/FilmDetailScreen';
import BookingScreen from '../screens/BookingScreen'
import {
  getFocusedRouteNameFromRoute,
  getActionFromState,
  AppState,
} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StartStack = ({ navigation, route }) => {

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Onboarding' || routeName === undefined || routeName === 'Login' || routeName === 'Register') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });

    } else {

      navigation.setOptions({
        tabBarStyle: {
          // height: 50,
          display: 'flex',
          backgroundColor: '#00092c'
        },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      <Stack.Screen name="Login" component={LoginScreen} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} /> */}
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="FilmDetail"
        component={FilmDetailScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen name="Booking" component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default StartStack;
