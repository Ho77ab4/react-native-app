import React, {useState} from 'react'
import { SafeAreaView, Text, StyleSheet, Image, TextInput, FlatList} from 'react-native'
import { Pressable, } from 'react-native'

import { DrawerContentScrollView } from '@react-navigation/drawer'
import { CategoryView } from './NotesManagerPages/CategoryView'
import { Elements } from './NotesManagerPages/ElementsPage'
import { createStackNavigator } from '@react-navigation/stack'

export const NotesManager = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Elements">
            <Stack.Screen name="Elements" component={Elements}/>
            <Stack.Screen name="CategoryView" component={CategoryView} />
        </Stack.Navigator>
    )
}



