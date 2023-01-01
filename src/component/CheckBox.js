import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function CheckBox(props) {
    const [checked, setChecked] = useState(false)
    const OnHandle = () => {
        setChecked(!checked)
    }

    return (
        <Pressable
            style={checked ? styles.checked : styles.unchecked}
            onPress={() => OnHandle()}>
            {
                checked && (
                    <AntDesign name='check' color={'#fff'} size={17} />
                )
            }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    unchecked: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 3,
    },
    checked: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 3,
        backgroundColor: '#ff0000'
    }
})