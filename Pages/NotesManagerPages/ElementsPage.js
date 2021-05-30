import React, {useState} from 'react'
import { SafeAreaView, Text, Button, StyleSheet, Image, TextInput, FlatList, Pressable } from 'react-native'
import { NoteCreateModal } from "../Modals/NoteCreateModal"
import { MenuContext } from 'react-native-menu'
import { Note } from '../Components/Note'
import { Directory } from '../Components/Directory'
import Plus from '../../Images/Plus.png'

export const Elements = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [elems, setElems] = useState([])

    const actionWithNote = (id, action) => {
        if (action === "Delete") {
            setElems(prev => prev.filter(elem => elem.id !== id))
        } else if (action == "Copy") {
            // copy
        }
    }

    const addNote = (title, type) => {
        if (type === "Note") {
            setElems(prev => [
                ...prev,
                {
                    id: Date.now().toString(),
                    title,
                    type,
                }
            ])
        } else if (type === "Directory") {
            setElems(prev => [
                ...prev,
                {
                    id: Date.now().toString(),
                    title,
                    parent: "parent",
                    type,
                }
            ])
        }
        console.log(elems);
    }

    const renderItem = ({item}) => {
        if (item.type === "Note") {
            return (
                <Note title={item.title} id={item.id} onDelete={actionWithNote} />
            )
        } else if (item.type === "Directory") {
            return (
                <Directory title={item.title} id={item.id} onDelete={actionWithNote} navigation={navigation}/>
            )
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <NoteCreateModal modalVisible={modalVisible} setModalVisible={setModalVisible} addNote={addNote}/>
            <MenuContext style={{flex: 1}}>
                <FlatList 
                    data={elems}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </MenuContext>
            <Pressable style={styles.buttonPlus} onPress={() => setModalVisible(true)}>
                <Image source={Plus} style={styles.plus}/>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
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