import React from 'react';
import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
import Footer from './components/Footer';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


export default function App() {


  

  return (
    <>
      <Header/>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}
          options={{tabBarStyle: {display: "none"}}} />
          <Tab.Screen name="Gameboard" component={Gameboard} />
        </Tab.Navigator>
      </NavigationContainer>
      <Footer/>
    </>
  );
}
//<Tab.Screen name="Scoreboard" component={Scoreboard} />