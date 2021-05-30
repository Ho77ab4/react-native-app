import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import {Help} from '../Pages/Help'
import {Contacts} from '../Pages/Contacts'

import { BottomTabNavigator } from './TabNavigator'

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={BottomTabNavigator} />
            <Drawer.Screen name="Contacts" component={Contacts} /> 
            <Drawer.Screen name="Help" component={Help} />
        </Drawer.Navigator>
    )
}