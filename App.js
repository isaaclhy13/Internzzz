import { StatusBar } from 'expo-status-bar';
import React, { useState, createContext } from 'react';
import { StyleSheet, Text, View , Keyboard, TouchableWithoutFeedback} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/login/login.js'

import Posting from './screens/posting.js'

import SearchingScreen from './screens/searching.js'

import {UserContext} from './userContext'


const Tab = createBottomTabNavigator();


export default function App() {
  const [user, setUser] = useState(null)
  
  return (

    <NavigationContainer>
      <UserContext.Provider value={[user, setUser]}>
      {user ?
      <Tab.Navigator>
        <Tab.Screen name="Posting" component={Posting}/>
        
        <Tab.Screen name="Searching" component={SearchingScreen} />
      </Tab.Navigator>
      
      :
      <LoginScreen/>
      }
      </UserContext.Provider>

    </NavigationContainer>
      
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
