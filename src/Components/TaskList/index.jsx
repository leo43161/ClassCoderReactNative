import { StyleSheet, FlatList, View } from 'react-native'
import ItemLista from './ItemLista'
import React from 'react'

const TaskList = ({
    list,
    onPressTask
}) => {
    return (
        <View style={styles.view2}>
            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item }) => ItemLista({ item, onPressTask })}
            ></FlatList>
        </View>
    )
}

export default TaskList

const styles = StyleSheet.create({
    view2: {
        height: "88%",
        backgroundColor: "darkcyan",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 15,
        gap: 20,
    },
})