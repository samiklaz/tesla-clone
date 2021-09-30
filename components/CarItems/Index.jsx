import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Settings</Text>
                <Text>SamMobile</Text>
                <Text>Next</Text>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight
    },
    header: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
})
