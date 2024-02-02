/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home/Home.js'
import { Overview } from './screens/Overview/Overview.js'
import { Favorites } from './screens/Favorites/Favorites.js';


const Stack = createNativeStackNavigator();

function App() {


  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, headerLeft: null, animation: "slide_from_right" }}>
          <Stack.Screen name='Home' component={ Home }/>
          <Stack.Screen name='Overview' component={ Overview }/>
          <Stack.Screen name='Favorites' component={ Favorites }/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
