import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Link href={"/details"}>
                <Button title='Open details Page' /></Link>
        </View>
    )
}

export default Page