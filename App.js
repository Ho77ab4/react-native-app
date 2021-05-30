import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Header } from './CustomViewComponents';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import {MenuProvider} from 'react-native-popup-menu'
import {Context} from './Context'

import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './Natigator/DrawerNavigator';

export default function App() {
  return (
      <MenuProvider>
          <NavigationContainer>
            <Header />
            <DrawerNavigator />
          </NavigationContainer>
      </MenuProvider>
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
