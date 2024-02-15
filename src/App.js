/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home/Home.js'
import { Overview } from './screens/Overview/Overview.js'
import { Favorites } from './screens/Favorites/Favorites.js';
import { Tutorial } from './screens/Tutorial/Tutorial.js'; 
import SQLite from "react-native-sqlite-storage";


const Stack = createNativeStackNavigator();


export const db = SQLite.openDatabase( 
  {
    name: "app.db",
    createFromLocation: 2
  },
  () => { },
  error => { console.log(error) }
);

function App() {

  useEffect(() => {
    createTables()
  }, [])

  const createTables = () => {
    db.transaction((qr) => {
      qr.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
        "favPokemons" + 
        "(id INTEGER, orderNum TEXT, name TEXT, weight FLOAT, height FLOAT, types TEXT);"
      );
    })
  }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false, headerLeft: null, animation: "slide_from_right" }}>
          <Stack.Screen name='Home' component={ Home }/>
          <Stack.Screen name='Overview' component={ Overview }/>
          <Stack.Screen name='Favorites' component={ Favorites }/>
          <Stack.Screen name='Tutorial' component={ Tutorial }/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
