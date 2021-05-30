import React, {useEffect} from 'react'
import { SafeAreaView, Text } from 'react-native'

export const CategoryView = ({title}) => {

    return (
        <SafeAreaView>
            <Text>{title}</Text>
        </SafeAreaView>
    )
}