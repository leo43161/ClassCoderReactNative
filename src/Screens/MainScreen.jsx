import { StyleSheet, Text, View, Pressable, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../Components/TopBar'
import TaskList from '../Components/TaskList'
import ModalTask from '../Components/Modal'

const MainScreen = ({ taskList }) => {
    const [list, setList] = useState(taskList);
    const [input, setInput] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [taskActive, setTaskActive] = useState({});

    const onAddTask = () => {
        setList([
            ...list,
            {
                id: list.length + 1,
                task: input,
                completed: false
            }
        ]);
    }
    const onPressTask = (task) => {
        console.log(task);
        setTaskActive(task);
        setModalVisible(!modalVisible);
    }


    return (
        <View style={styles.container}>
            <TopBar
                input={input}
                onAddTask={onAddTask}
                setInput={setInput}
            ></TopBar>
            <TaskList
                list={list}
                onPressTask={onPressTask}
            ></TaskList>
            <ModalTask
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                taskActive={taskActive}
            ></ModalTask>
        </View >
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

});