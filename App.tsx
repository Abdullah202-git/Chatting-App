/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import Start from './components/screens/Start';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import LoginScreen from './components/screens/login2';
// import Prep from './components/screens/prep';
// import Login_new from './components/screens/login2';
// import Olxscreen from './components/screens/olx';
// import ChatScreen from './components/screens/chat';
// import Resturant from './components/screens/resturant';
// import Startscreen from './components/screens/screen1';
// import Screen2 from './components/screens/screen2';
// import quiz3 from './components/screens/quiz3';
// import calculator from './components/screens/Calculator';
// import Calculator from './components/screens/calsun';
// import Docscreen from './components/screens/doctorscreen';
// import Quiz4 from './components/screens/Quiz4';
// import classquiz4 from './components/screens/Quiz4';
// import Classquiz4 from './components/screens/Quiz4';
import Loginpro from './components/screens/Plogin';
import Regpro from './components/screens/regscreen';
import Mainchat from './components/screens/main';
import Chatopen from './components/screens/chat';
import Newchat from './components/screens/newreg';




const Stack= createNativeStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='login' component={Loginpro} />
        <Stack.Screen name='Register' component={Regpro} />
        <Stack.Screen name='Chat List' component={Mainchat} />
        <Stack.Screen name='Chat' component={Chatopen} />
        <Stack.Screen name='New Chat' component={Newchat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
