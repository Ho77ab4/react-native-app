import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, Pressable, Alert } from 'react-native'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export const Note = ({title, action}) => {

    const optionChoosedHandler = (value) => {
        if (value === "Delete")
        {
            Alert.alert(
                "Удаление элемента",
                "Вы действительно хотите удалить элемент?",
                [
                    {
                        text: "OK",
                        onPress: () => action(title, value)
                    }, 
                    {
                        text: "Cancel",
                        onPress: () => {},
                        style: "cancel"
                    }
                ]
            )
        }
    }

    const onDeletePressed = () => {
        Alert.alert(
            "Удаление элемента",
            "Вы действительно хотите удалить элемент?",
            [
                {
                    text: "OK",
                    onPress: () => action(title, "Delete")
                }, 
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <Icon name="note-text-outline" size={30} color="black" />
            <Text style={styles.text}>{title}</Text>
            <Menu style={styles.dropdown}>
                <MenuTrigger style={{triggerTouchable: 'white', width: 50}}>
                    <Text style={styles.pressText}>&#8942;</Text>
                </MenuTrigger>
                <MenuOptions >
                    <MenuOption onSelect={() => alert(`Copied`)} >
                        <Text style={{fontSize: 20}}>Copy</Text>
                    </MenuOption>
                    <MenuOption onSelect={onDeletePressed} >
                        <Text style={{color: 'red', fontSize: 20}}>Delete</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        marginBottom: 5,
    },
    text: {
        marginLeft: 5,
        fontSize: 20,
    },
    dropdown: {
        position: 'absolute',
        right: 10,
    },
    dropDownOpts: {
        borderRadius: 5,
    },
    press: {
        width: 50,
    },
    pressText: {
        textAlign: 'center',
        fontSize: 25,
    }
})