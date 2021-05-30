import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Contacts = () => {
    return (
        <View style={styles.container}>
            <Text>Contacts</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

