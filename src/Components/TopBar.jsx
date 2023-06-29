import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const TopBar = ({
    input,
    onAddTask,
    setInput
}) => {
    return (
        <View style={styles.view1}>
            <TextInput
                placeholder='Comprar comida'
                style={styles.input}
                value={input}
                onChangeText={setInput}
            ></TextInput>
            <TouchableOpacity
                style={styles.button}
                onPress={onAddTask}
            >
                <Text style={styles.buttonText}>Agregar Tarea</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({
    view1: {
        height: "12%",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "azure",
        width: "100%",
    },
    input: {
        width: 250,
        height: 35,
        borderBottomColor: "deepskyblue",
        borderBottomWidth: 3,
        color: "gray",
        fontSize: 20,
    },
    button: {
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "deepskyblue",
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
    },
})