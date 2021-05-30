import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NotesManager } from '../Pages/NotesManager'
import { DirectoriesNavigator } from '../Natigator/StackDirectoriesNavigator'
import { Redactor } from '../Pages/Redactor'

const Tab = createBottomTabNavigator()

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                tabStyle: {
                    paddingBottom: 15,
                },
                allowFontScaling: true,
                inactiveBackgroundColor: '#55D470',
                activeBackgroundColor: '#65EC82',
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="NotesManager" component={DirectoriesNavigator} />
            <Tab.Screen name="Redactor" component={Redactor} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tab: {
        marginBottom: 10,
        fontSize: 20,
    }
})

