import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const MainScreen = ({ taskList }) => {
    const [list, setList] = useState(taskList);
    const [input, setInput] = useState("");

    const onAddTask = () => {
        console.log("se agrego una task");
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ]);
    }
    const renderItemTask = ({ item }) => {
        return (
            <View style={styles.task} key={item.id}>
                <Text style={styles.taskText}>{item.task}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
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
            <View style={styles.view2}>
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={renderItemTask}
                ></FlatList>
                {/* list.map(({ id, task, completed }) => (

                )) */}
            </View>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
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
    view2: {
        height: "88%",
        backgroundColor: "darkcyan",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
        gap: 20,
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
    task: {
        width: 350,
        backgroundColor: "azure",
        padding: 10,
        marginBottom: 15,
        backgroundColor: "mediumpurple",
        borderRadius: 6,
        borderColor: "#000",
        borderBottomWidth: 3,
        borderRightWidth: 3,
    },
    taskText: {
        fontSize: 20,
    },
});