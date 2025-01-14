import React from 'react'
import { Stack } from 'expo-router'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import profile from "../assets/images/rider.jpg"

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name='(tabs)/index'
                options={{
                    headerLeft: () => (
                        <Image source={profile} style={{ width: 30, height: 30, borderRadius: 20 }} />
                    ),
                    headerRight: () => <Ionicons name="settings-outline" size={20} color="black" />,

                    headerTitle: () => (
                        <Image
                            source={{
                                uri: 'https://upload.wikimedia.org/wikipedia/commons/2/26/X_logo_2023.png', // Example URL for the X logo
                            }}
                            style={{ width: 30, height: 30, borderRadius: 20 }}
                        />
                    ),
                }} />

            <Stack.Screen name='details' options={{ headerTitle: "Details" }} />

        </Stack>
    )
}

export default Layout