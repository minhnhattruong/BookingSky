import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/headers/Header'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';



export default function AvatarPick({ navigation }) {

    const [img, setImg] = useState()

    return (
        <View style={styles.container}>
            <Header title='Chọn ảnh đại diện' navigation={navigation} />
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <View style={styles.avatar} >
                    <Image source={{ uri: img }} style={{ flex: 1, borderRadius: AVATAR_WIDTH }} />
                </View>
            </View>
            <View style={{ height: WINDOW_HEIGHT * 0.35, backgroundColor: '#fff' }}>
                <TouchableOpacity onPress={ImageCroper} style={styles.albumBtn}>
                    <Text style={{ color: '#699BF7' }}>Chọn ảnh từ Album</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const AVATAR_WIDTH = WINDOW_WIDTH * 0.70
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    avatar: {
        width: AVATAR_WIDTH,
        height: AVATAR_WIDTH,
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: AVATAR_WIDTH,
        overflow: 'hidden',
        backgroundColor: '#fff',
        padding: 5
    },
    albumBtn: {
        width: 150,
        height: 50,
        borderColor: '#699BF7',
        borderWidth: 1,


    }
})