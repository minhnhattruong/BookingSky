import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
export default function SignupSuccess({ navigation, route }) {
    const { name } = route.params
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ justifyContent: 'center', height: '100%' }} style={{ width: '100%', paddingHorizontal: 30, }}>
                <View style={styles.mainContent}>
                    <Ionicons name='checkmark-circle' size={80} color={'#53CF76'} />
                    <Text style={{ marginTop: 30, fontSize: 30, color: '#000', textAlign: 'center', fontWeight: 'bold' }}>
                        Xin chào, {name} !
                    </Text>
                    <Text style={{ marginTop: 30, textAlign: 'center', color: '#666666' }}>
                        Tài khoản của bạn đã được đăng ký thành công. Chúc các bạn có những trải nghiệm tuyệt vời nhất trên ứng dụng của chúng tôi !</Text>
                    <View style={styles.continue}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                            <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>
                                Xong</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const CONTENT_WIDTH = WINDOW_WIDTH * 0.9
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C5A99',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContent: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 50,
        paddingHorizontal: 30,
        borderRadius: 40,
    },
    continue: {
        backgroundColor: "#F70202",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '100%',
        marginTop: 60,

    },
})