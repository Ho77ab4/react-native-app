import React, {useState, useEffect} from 'react'
import {View, Button, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MenuContext } from 'react-native-menu'

import { DirectoriesMainScreen } from '../screens/DirectoriesNavMainScreen'
import { Context } from '../Context'

export const DirectoriesNavigator = () => {
    const [fetchedDirectories, setFetchedDirectories] = useState([
        {name: 'Directory 1', icon: '', tags: [], creationDate: '', lastModifiedDate: '', parent: 'Root'},
        {name: 'Directory 2', icon: '', tags: [], creationDate: '', lastModifiedDate: '', parent: 'Root'},
        {name: 'Directory 3', icon: '', tags: [], creationDate: '', lastModifiedDate: '', parent: 'Directory 1'},
        {name: 'Note 1', icon: '', tags: [], creationDate: '', lastModifiedDate: '', parent: 'Root', id: '', content: '', userId: ''},
    ])

    const DirectoryStack = createStackNavigator()

    const deleteElement = (name, action) => {
        if (action === "Delete") {
            setFetchedDirectories(prev => prev.filter(item => item.name !== name));
        } else if (action == "Copy") {
            // copy
        }
    }

    const addElement = (title, type, parent) => {
        if (type === "Note") {
            setFetchedDirectories(prev => [
                ...prev,
                {
                    name: title,
                    icon: '',
                    tags: [],
                    creationDate: Date.now().toString() ,
                    lastModifiedDate: Date.now().toString(),
                    parent: parent,
                    id: '', 
                    content: '', 
                    userId: ''
                }
            ])
        } else if (type === "Directory") {
            setFetchedDirectories(prev => [
                ...prev,
                {
                    name: title,
                    icon: '',
                    tags: [],
                    creationDate: Date.now().toString() ,
                    lastModifiedDate: Date.now().toString(),
                    parent: parent,
                }
            ])
        }
    }

    return (
        <Context.Provider value={{
            fetchedDirectories,
            setFetchedDirectories
        }}>
            <DirectoryStack.Navigator initialRouteName="Main">
                    <DirectoryStack.Screen 
                        name="Main" 
                        component={DirectoriesMainScreen} 
                        initialParams={{
                            directoryName: 'Main',
                            directories: fetchedDirectories,
                            parent: "Root",
                        }}
                        options={({route}) => ({title: route.params.directoryName})}
                    />
            </DirectoryStack.Navigator>
        </Context.Provider>
    )
}