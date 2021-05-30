import React, {useState, useContext, useEffect} from 'react'
import {SafeAreaView, Text, StyleSheet, Button, Pressable, Image, FlatList} from 'react-native'
import {NoteCreateModal} from '../Pages/Modals/NoteCreateModal'
import Plus from '../Images/Plus.png'
import {Directory} from '../Pages/Components/Directory'
import {Note} from '../Pages/Components/Note'
import { MenuProvider } from 'react-native-popup-menu';
import {Context} from '../Context'

export const DirectoriesMainScreen = ({navigation, route}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const { fetchedDirectories, setFetchedDirectories } = useContext(Context);
    const { directories, parent } = route.params;

    const [screenDirectories, setScreenDirectories] = useState(fetchedDirectories.filter(item => item.parent === parent));

    const actionWithNote = (name, action) => {
        if (action === "Delete") {
            setFetchedDirectories(prev => prev.filter(item => item.name !== name))
            setScreenDirectories(prev => prev.filter(item => item.name !== name));
            console.log(fetchedDirectories)
        } else if (action == "Copy") {
            // copy
        }
    }

    const addNote = (title, type) => {
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
            setScreenDirectories(prev => [
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
            setScreenDirectories(prev => [
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

    const renderItem = ({item}) => {
        if (item.parent === parent) {
            if (Object.keys(item).includes('content'))  {
                return (
                    <Note
                        title={item.name}
                        action={actionWithNote}
                    />
                )
            } else {
                return (
                    <Directory 
                        title={item.name}
                        action={actionWithNote}
                        onPress={() => {
                            navigation.push('Main', {directoryName: item.name, directories: directories, parent: item.name})
                        }} 
                    />
                )
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <NoteCreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} addNote={addNote}/>
            <FlatList 
                data={screenDirectories}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
            <Pressable style={styles.buttonPlus} onPress={() => setModalVisible(true)}>
                <Image source={Plus} style={styles.plus}/>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: 100,
    },
    plus: {
        width: 60, 
        height: 60,
    },
    buttonPlus: {
        position: 'absolute',
        right: 7,
        bottom: 7,
    },
})

